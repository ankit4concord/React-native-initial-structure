import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Slices';
import thunk from 'redux-thunk';
import { loggerMiddleware } from './middlewares/logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, loggerMiddleware],
});

export default store;
