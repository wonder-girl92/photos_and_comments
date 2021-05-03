import {createLogger} from "redux-logger/src";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import photosReducer from "./photos";
import modal from "./modal";

const logger = createLogger({
    diff: true,
    collapsed: true,
});

const rootReducer = combineReducers({
    photos: photosReducer,
    modal: modal
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;