import * as types from './Types'

export const getNavbar = () => async dispatch => {
    const res = await fetch(`${process.env.BASE_URI}/api/navbar`)
    dispatch({
        type: types.GET_NAVBAR,
        payload: await res.json()
    })
}

export const deleteNavitem = (id) => async dispatch => {
    const res = await fetch(`${process.env.BASE_URI}/api/navbar/${id}` , {method: "DELETE"})
    dispatch({
        type: types.DELETE_NAVITEM,
        payload: id
    })
}