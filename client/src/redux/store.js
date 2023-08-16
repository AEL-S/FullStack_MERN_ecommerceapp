import {combineReducers, configureStore} from '@reduxjs/toolkit'
import products from './slices/products';

const reducer = combineReducers({
    products,
    // users
});

export default configureStore({
    reducer
});