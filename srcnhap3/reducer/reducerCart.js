import { ADD_CART, GET_CART, ADD_MORE, SUBTRACT_MORE, REMOVE_CART, TOTAL } from '../actions/actiontypes';
import saveCart from '../api/saveCart';
import getCart from '../api/getCart';
import { AsyncStorage } from 'react-native';

const defaultState = [];

getCart()
    .then(cartArray => {
        console.log('cartAraay get: ', cartArray)
        defaultState = cartArray;
        console.log('defaultState get: ', defaultState)
    }, err => { defaultState = []; }
    );


const reducerCart = (state = defaultState, action) => {
    // state =
    switch (action.type) {
        case ADD_CART:
            var check = false;
            state.map(e => {
                if (e.id !== action.payload.id) {
                    check = true;
                } else {
                    check = false;
                    return;
                }
            })

            if (check || state.length === 0) {
                state = state.concat(action.payload);
            } else {
                state = state.map(e => {
                    if (e.id !== action.payload.id)
                        return {
                            e,
                        };
                    return { ...e, quantity: e.quantity + 1 };
                });
            }
            saveCart(state);
            console.log('sau save');
            return state;
        case GET_CART:

            getCart()
                .then(cartArray => {
                    console.log('cartAraay get: ', cartArray)
                    state = cartArray;
                    console.log('state get: ', state)
                })

            return state;
        case ADD_MORE:
            {
                state = state.map(e => {
                    if (e.id !== action.id) return e;
                    return {
                        ...e, quantity: e.quantity + 1
                    }
                })
                saveCart(state);
                return state;
            }
        case SUBTRACT_MORE:
            {
                state = state.map(e => {
                    if (e.id !== action.id || e.quantity === 1) return e;
                    return {
                        ...e, quantity: e.quantity - 1,
                    }
                })
                saveCart(state);
                return state;
            }
        case REMOVE_CART:
            {
                state = state.filter(e => {
                    if (e.id !== action.id) return e;
                })
                saveCart(state);
                return state;
            }
        default:
            {
                return state;
            }
    }
}
export default reducerCart;