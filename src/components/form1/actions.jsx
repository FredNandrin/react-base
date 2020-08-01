
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING'
export const FETCH_DATA_ERROR   = 'FETCH_DATA_ERROR'
export const SET_ELIGIBILITY    =  'SET_ELIGIBILITY'
export const FETCH_DEFAULT      = 'FETCH_DEFAULT'

export function fetchDataPending(pending) {
    return {type: FETCH_DATA_PENDING, pending }
}

export function fetchDataError(error) {
    return {type: FETCH_DATA_ERROR, error }
}

export function setEligibility(isEligible) {
    return {type: SET_ELIGIBILITY, isEligible}
}

export function fetchDefaultDataSuccess(data) {
    return {type: FETCH_DEFAULT, data}
}