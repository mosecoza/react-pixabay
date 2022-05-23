import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import images from "./images/slices/images";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


function buildStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(combineReducers({images}), {}, composeEnhancers(applyMiddleware(thunkMiddleware)))

}

export default buildStore;