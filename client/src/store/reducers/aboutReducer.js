import initialState from "./initialState";
import * as types from '../actions/Types'

export const aboutReducer = (state=initialState.about,action) => {
    switch (action.type) {
        case types.GET_ABOUT:
            return {
                ...state,
                about:action.payload
            }
        default:
            return state;
    }
}