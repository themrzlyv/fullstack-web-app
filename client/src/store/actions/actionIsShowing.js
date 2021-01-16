import * as types from './Types'

export const navShowing = (navActive) => async dispatch => {
    dispatch({
        type: types.NAV_SHOWING,
        payload: navActive
    })
}

export const aboutShowing = (aboutActive) => async dispatch => {
    dispatch({
        type: types.ABOUT_SHOWING,
        payload: aboutActive
    })
}