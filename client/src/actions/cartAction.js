import * as api from '../api/index';

import * as action from '../constants/actionConstants'; 

export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await api.addToCart(id);
        dispatch({ type: action.ADD_TO_CART, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: action.REMOVE_FROM_CART, payload: id });
}