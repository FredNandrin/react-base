import {FETCH_DATA_PENDING, FETCH_DATA_ERROR, SET_ELIGIBILITY, FETCH_DEFAULT, SET_FIELD1, SEND_FORM} from './actions'

const initState = {
    pending: false,
    error: null,
    eligible: false,
    msg: 'default msg',
    form1: {
        field1: 'ee'
    }
}

export function dataFetching(state = initState, action){
    switch(action.type) {
        case FETCH_DATA_PENDING:
            return {...state, pending: action.pending}
        case FETCH_DATA_ERROR:
            return {...state, pending: false, error: action.error}
        case SET_ELIGIBILITY:
            return {...state, eligible: action.isEligible}
        case FETCH_DEFAULT:
            return {...state, msg: action.data.default}
        case SET_FIELD1:
            console.log(action);
            return {...state, form1:{...state.form1,field1:action.value}}
        default:
            return state
    }
}

const initDefaultState = {
    types:[]
}

export function defaultDataFetching(state = initDefaultState, action){
    switch(action.type) {
        case FETCH_DEFAULT:
            return {...state, types: action.data}
        default:
            return state
    }
}
