import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mados, Mado } from './mado';
import { Device, device } from './device';

export type RootState = {
  mados: Mado[];
  device: Device;
};

const rootReducer = combineReducers({
  mados,
  device
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
