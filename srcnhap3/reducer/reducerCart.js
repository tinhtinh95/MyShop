import { ADD_CART } from '../actions/actiontypes';

const cart=[];

const reducerCart = (state =cart, action) => {
    switch (action.type) {
        case ADD_CART:
            state = state.concat(action.payload);
            return state;
        default:
            return state;
    }
}
export default reducerCart;