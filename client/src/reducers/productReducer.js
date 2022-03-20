import * as actionType from '../constants/actionConstants';

export const getProductsReducer = (state={ products:[] }, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCTS_SUCCESS: 
            return { ...state, products: action.payload };
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default: 
            return state;
    }
};

export const getProductDetailsReducer = (state={ product: {} }, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, product : action.payload };
            case actionType.GET_PRODUCT_DETAIL_FAIL:
                return { error: action.payload }
        default: 
            return state;
    }
};
