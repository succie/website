import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mados, Mado } from "./mado";

export type RootState = {
  mados: Mado[];
};

const rootReducer = combineReducers({
  mados
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
