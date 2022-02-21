import { createStore, applyMiddleware, compose } from "redux";
import contactReducer from "../reducer/contactReducer";
import thank from "redux-thunk";
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  contactReducer,
  composeEnchancer(applyMiddleware(thank))
);
