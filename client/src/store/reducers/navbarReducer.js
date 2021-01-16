import initialState from './initialState'
import * as types from '../actions/Types'

export const navbarReducer = (state=initialState.navbar,action) => {
    switch (action.type) {
        case types.GET_NAVBAR :
            return {
                ...state,
                data:action.payload
            }
        case types.DELETE_NAVITEM:
            const newState = state.data.filter(p=>p.id!==action.payload)
            return newState;
        default:
            return state;
    }
}