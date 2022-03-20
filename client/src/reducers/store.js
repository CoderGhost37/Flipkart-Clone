import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductDetailsReducer, getProductsReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const reducer = combineReducers ({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
})

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default store;