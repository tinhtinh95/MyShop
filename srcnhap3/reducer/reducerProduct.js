import { GET_DATA } from '../actions/actiontypes';

const reducerProduct = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            console.log("reducerProduct", action.payload)
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default reducerProduct;