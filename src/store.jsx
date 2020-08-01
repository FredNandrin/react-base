import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
/*
import { serviceFetching } from './offer/services/reducer'
 */
import { dataFetching, defaultDataFetching } from "./components/form1/reducer";

const reducers = combineReducers({
    data : dataFetching,
    defaultData : defaultDataFetching
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
