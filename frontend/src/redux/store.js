import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

// Reducers
import {cartReducer} from "./reducers/cartReducers";
import {
    getProductsReducer,
    getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

/* Middleware to make asynchronous Requests in Actions */
const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    /* Enhancer */
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;