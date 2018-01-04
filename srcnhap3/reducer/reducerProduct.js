import { GET_PRODUCT } from '../actions/actiontypes';

const reducerProduct = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCT:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default reducerProduct;