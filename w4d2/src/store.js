import {legacy_createStore  ,combineReducers,applyMiddleware,compose} from "redux"
import { creducer } from "./reducers/c.reducer"
import { treducer } from "./reducers/t.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootreducer  = combineReducers({
    counter : creducer,
    todo : treducer
})
;

export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware()))

