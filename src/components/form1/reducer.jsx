import { FETCH_DATA_PENDING, FETCH_DATA_ERROR, SET_ELIGIBILITY, FETCH_DEFAULT} from './actions'

const initState = {
    pending: false,
    error: null,
    eligible: false
}

export function dataFetching(state = initState, action){
    switch(action.type) {
        case FETCH_DATA_PENDING:
            return {...state, pending: action.pending}
        case FETCH_DATA_ERROR:
            return {...state, pending: false, error: action.error}
        case SET_ELIGIBILITY:
            return {...state, eligible: action.isEligible}
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
