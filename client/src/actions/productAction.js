import * as api from '../api/index';

import * as action from '../constants/actionConstants'; 

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getProducts();
        dispatch({ type: action.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.response });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        const { data } = await api.getProductDetails(id);
        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
    }
}