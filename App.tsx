import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Router from './src/router';
import { persistStore } from 'redux-persist';
import store from './src/store';
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
