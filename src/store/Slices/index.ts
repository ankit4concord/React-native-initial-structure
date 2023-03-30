import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import demoSlice from './demo';
import { persistReducer } from 'redux-persist';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  demo: demoSlice,
  Auth: authSlice
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
