import { ADD_CART, GET_CART } from '../actions/actiontypes';
import saveCart from '../api/saveCart';
import getCart from '../api/getCart';





const reducerCart = (state = [], action) => {
    switch (action.type) {
        case ADD_CART:
            var check = false;

            // if (state.length === 0) {
            //     state = state.concat(action.payload);
            // // } else {
            // //     for (var i = 0; i < state.length; i++) {
            // //         console.log('action.payload:', action.payload.id, 'state[].id:', state[i].id);
            // //         if (state[i].id === action.payload.id) {
            // //             state[i].quantity = state[i].quantity + 1;
            // //             check = false; 
            // //             break;
            // //         } else {
            // //             check = true;
            // //         }
            // //         // console.log(state[i].quantity);
            // //     }
            // }

            state.map(e => {
                if (e.id !== action.payload.id) {
                    // console.log('chua co')
                    check = true;
                } else {
                    check = false;
                    return;
                }
            })

            // state.filter(e => {
            //     if (e.id !== action.payload.id) {
            //         console.log('chua co')
            //         check = true;
            //     } else {
            //         check = false;
            //         return;
            //     }
            // })

            if (check || state.length === 0) {
                // console.log('null');
                state = state.concat(action.payload);
                // check = false;
            } else {
                state = state.map(e => {
                    if (e.id !== action.payload.id)
                        return {
                            e,
                        };
                    return { ...e, quantity: e.quantity + 1 };
                });
            }
            // async () => (
            //     await saveCart(state)
            // )
            // return state;
            saveCart(state);
            console.log('sauasave');
            return state;
        case GET_CART:
            {

                getCart()
                    .then(cartArray => {
                        // return cartArray
                        console.log('cartAraay get: ', cartArray)
                        state = cartArray;
                        console.log('state get: ', state)
                        // return state;
                    })
            }
            console.log('state oday:', state)
            return state;
        default:
            {
                return state;
            }
    }
}
export default reducerCart;