import { dataReducer } from "../reducer/combineReducer"
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware,compose } from "redux"
import { mySaga } from "../saga/mySaga";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Storage = createStore(dataReducer, composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mySaga)