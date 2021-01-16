import * as types from '../actions/Types'
import initialState from './initialState'

export const isShowingReducer = (state=initialState,action) => {
    switch (action.type) {
        case types.NAV_SHOWING:
            return {
                ...state,
                isshowing: action.payload
            }
        
        case types.ABOUT_SHOWING:
            return {
                ...state,
                isshowing: action.payload
            }

        default:
            return state;
    }
}