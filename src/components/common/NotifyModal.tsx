import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Button from './Button';
import colors from 'utils/colors';

const NotifiyModal = (props: any) => {
  const {
    title,
    subtitle,
    Icon,
    btnLabelOne,
    btnLabelTwo,
    onbtnOneClick,
    onbtnTwoClick,
    isShowSingleButton,
    btnOneStyle,
    btnTwoStyle,
  } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>{Icon}</View>
        <View style={styles.contentWrapper}>
          <Text style={styles.content}>{title}</Text>
          <Text style={[styles.content, { fontWeight: 'normal' }]}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {!isShowSingleButton && (
            <Button
              label={btnLabelTwo}
              buttonColor="transparent"
              textStyle={{ fontWeight: 'bold', color: colors.black }}
              buttonStyle={[styles.btnCancel, btnTwoStyle]}
              onPress={onbtnTwoClick}
            />
          )}
          <Button
            label={btnLabelOne}
            buttonColor={colors.transparentBlack}
            buttonStyle={[styles.btnOk, btnOneStyle]}
            textStyle={{ fontWeight: 'bold' }}
            onPress={onbtnOneClick}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NotifiyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  contentWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    margin: 20,
  },
  box: {
    width: '50%',
    padding: 10,
  },
  content: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#000',
  },
  btnCancel: {
    width: 120,
    borderWidth: 2,
    borderColor: colors.black,
    margin: 10,
  },
  btnOk: {
    width: 120,
    margin: 10,
  },
});
