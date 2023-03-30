import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';
import DataWedgeIntents from 'react-native-datawedge-intents';
import {DeviceEventEmitter} from 'react-native';

export default class DataWedgeScan extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      ean8checked: true, 
      ean13checked: true,
      code39checked: true,
      code128checked: true,
      lastApiVisible: true,
      lastApiText: 'Messages from DataWedge will go here',
      checkBoxesDisabled: true,
      scanButtonVisible: true,
      dwVersionText:
        'Pre 6.3.  Please create and configure profile manually.  See the ReadMe for more details',
      dwVersionTextStyle: styles.itemTextAttention,
      activeProfileText: 'Requires DataWedge 6.3+',
      enumeratedScannersText: 'Requires DataWedge 6.3+',
      scans: [],
    };
    this.sendCommandResult = 'false';
  }
//  Declare a handler for barcode scans
  componentDidMount() {
    this.state.deviceEmitterSubscription = DeviceEventEmitter.addListener(
      'datawedge_broadcast_intent',
      intent => {
        this.broadcastReceiver(intent);
      },
    );
    this.registerBroadcastReceiver();
    this.determineVersion();
    this.scanHandler = (deviceEvent) => {
      // Recived the scanned Data
    this.props.sendScanData(deviceEvent);
  };
    DeviceEventEmitter.addListener('barcode_scan', this.scanHandler);
  }

  componentWillUnmount() {
    this.state.deviceEmitterSubscription.remove();
  }

  _onPressScanButton() {
    this.sendCommand(
      'com.symbol.datawedge.api.SOFT_SCAN_TRIGGER',
      'TOGGLE_SCANNING',
    );
  }

  determineVersion() {
    this.sendCommand('com.symbol.datawedge.api.GET_VERSION_INFO', '');
  }

  setDecoders() {
    //  Set the new configuration
    var profileConfig = {
      PROFILE_NAME: 'ZebraReactNativeDemo',
      PROFILE_ENABLED: 'true',
      CONFIG_MODE: 'UPDATE',
      PLUGIN_CONFIG: {
        PLUGIN_NAME: 'BARCODE',
        PARAM_LIST: {
          //"current-device-id": this.selectedScannerId,
          scanner_selection: 'auto',
          decoder_ean8: '' + this.state.ean8checked,
          decoder_ean13: '' + this.state.ean13checked,
          decoder_code128: '' + this.state.code128checked,
          decoder_code39: '' + this.state.code39checked,
        },
      },
    };
    this.sendCommand('com.symbol.datawedge.api.SET_CONFIG', profileConfig);
  }

  sendCommand(extraName, extraValue) {
    var broadcastExtras = {};
    broadcastExtras[extraName] = extraValue;
    broadcastExtras['SEND_RESULT'] = this.sendCommandResult;
    DataWedgeIntents.sendBroadcastWithExtras({
      action: 'com.symbol.datawedge.api.ACTION',
      extras: broadcastExtras,
    });
  }

  registerBroadcastReceiver() {
    DataWedgeIntents.registerBroadcastReceiver({
      filterActions: [
        'com.zebra.reactnativedemo.ACTION',
        'com.symbol.datawedge.api.RESULT_ACTION',
      ],
      filterCategories: ['android.intent.category.DEFAULT'],
    });
  }

  broadcastReceiver(intent) {
    //  Broadcast received
  //Commnad sent to scanner, scanner activated 
    if (intent.hasOwnProperty('RESULT_INFO')) {
      var commandResult =
        intent.RESULT +
        ' (' +
        intent.COMMAND.substring(
          intent.COMMAND.lastIndexOf('.') + 1,
          intent.COMMAND.length,
        ) +
        ')'; // + JSON.stringify(intent.RESULT_INFO);
      this.commandReceived(commandResult.toLowerCase());
    }

    if (
      intent.hasOwnProperty('com.symbol.datawedge.api.RESULT_GET_VERSION_INFO')
    ) {
      //  The version has been returned (DW 6.3 or higher).  Includes the DW version along with other subsystem versions e.g MX
      var versionInfo =
        intent['com.symbol.datawedge.api.RESULT_GET_VERSION_INFO'];
      var datawedgeVersion = versionInfo['DATAWEDGE'];
 

      //  Fire events sequentially so the application can gracefully degrade the functionality available on earlier DW versions
      if (datawedgeVersion >= '06.3') this.datawedge63();
      if (datawedgeVersion >= '06.4') this.datawedge64();
      if (datawedgeVersion >= '06.5') this.datawedge65();

      this.setState(this.state);
    } else if (
      intent.hasOwnProperty(
        'com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS',
      )
    ) {
      //  Return from our request to enumerate the available scanners
      var enumeratedScannersObj =
        intent['com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS'];
      this.enumerateScanners(enumeratedScannersObj);
    } else if (
      intent.hasOwnProperty(
        'com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE',
      )
    ) {

      //  Return from our request to obtain the active profile
      var activeProfileObj =
        intent['com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE'];
      this.activeProfile(activeProfileObj);
    } else if (!intent.hasOwnProperty('RESULT_INFO')) {
      //  A barcode has been scanned
      
      this.barcodeScanned(intent, new Date().toLocaleString());
    }
  }

  datawedge63() {
   
    //  Create a profile for our application
    this.sendCommand(
      'com.symbol.datawedge.api.CREATE_PROFILE',
      'AwesomeProject',
    );

    this.state.dwVersionText =
      '6.3.  Please configure profile manually.  See ReadMe for more details.';

    //  Although we created the profile we can only configure it with DW 6.4.
    this.sendCommand('com.symbol.datawedge.api.GET_ACTIVE_PROFILE', '');

    //  Enumerate the available scanners on the device
    this.sendCommand('com.symbol.datawedge.api.ENUMERATE_SCANNERS', '');

    //  Functionality of the scan button is available
    this.state.scanButtonVisible = true;
  }

  datawedge64() {
    //  Documentation states the ability to set a profile config is only available from DW 6.4.
    //  For our purposes, this includes setting the decoders and configuring the associated app / output params of the profile.
    this.state.dwVersionText = '6.4.';
    this.state.dwVersionTextStyle = styles.itemText;
    //document.getElementById('info_datawedgeVersion').classList.remove("attention");

    //  Decoders are now available
    this.state.checkBoxesDisabled = false;

    //  Configure the created profile (associated app and keyboard plugin)
    var profileConfig = {
      PROFILE_NAME: 'ZebraReactNativeDemo',
      PROFILE_ENABLED: 'true',
      CONFIG_MODE: 'UPDATE',
      PLUGIN_CONFIG: {
        PLUGIN_NAME: 'BARCODE',
        RESET_CONFIG: 'true',
        PARAM_LIST: {},
      },
      APP_LIST: [
        {
          PACKAGE_NAME: 'com.intialsetupreactnative', // Update the project package name 
          ACTIVITY_LIST: ['*'],
        },
      ],
    };
    this.sendCommand('com.symbol.datawedge.api.SET_CONFIG', profileConfig);

    //  Configure the created profile (intent plugin)
    var profileConfig2 = {
      PROFILE_NAME: 'ZebraReactNativeDemo',
      PROFILE_ENABLED: 'true',
      CONFIG_MODE: 'UPDATE',
      PLUGIN_CONFIG: {
        PLUGIN_NAME: 'INTENT',
        RESET_CONFIG: 'true',
        PARAM_LIST: {
          intent_output_enabled: 'true',
          intent_action: 'com.zebra.reactnativedemo.ACTION',
          intent_delivery: '2',
        },
      },
    };
    this.sendCommand('com.symbol.datawedge.api.SET_CONFIG', profileConfig2);

    //  Give some time for the profile to settle then query its value
    setTimeout(() => {
      this.sendCommand('com.symbol.datawedge.api.GET_ACTIVE_PROFILE', '');
    }, 1000);
  }

  datawedge65() {
    this.state.dwVersionText = '6.5 or higher.';
    //  Instruct the API to send
    this.sendCommandResult = 'true';
    this.state.lastApiVisible = true;
  }

  commandReceived(commandText) {
    this.state.lastApiText = commandText;
    this.setState(this.state);
  }

  enumerateScanners(enumeratedScanners) {
    var humanReadableScannerList = '';
    for (var i = 0; i < enumeratedScanners.length; i++) {
      humanReadableScannerList += enumeratedScanners[i].SCANNER_NAME;
      if (i < enumeratedScanners.length - 1) humanReadableScannerList += ', ';
    }
    this.state.enumeratedScannersText = humanReadableScannerList;
  }

  activeProfile(theActiveProfile) {
    this.state.activeProfileText = theActiveProfile;
    this.setState(this.state);
  }

  barcodeScanned(scanData, timeOfScan) {
    var scannedData = scanData['com.symbol.datawedge.data_string'];
    var scannedType = scanData['com.symbol.datawedge.label_type'];
    this.state.scans.unshift({
      data: scannedData,
      decoder: scannedType,
      timeAtDecode: timeOfScan,
    });
    this.setState(this.state);
  }

  render() {
    return(
 <></>)
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
  },
});
