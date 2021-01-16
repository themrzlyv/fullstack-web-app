import * as types from './Types'

export const getAbout = () => async dispatch => {
    const res = await fetch(`${process.env.BASE_URI}/api/about`)
    dispatch({
        type: types.GET_ABOUT,
        payload: await res.json()
    })
}