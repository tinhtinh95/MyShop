import { GET_CATEGORY } from '../actions/actiontypes';

const reducerCat = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORY:
            console.log('reducerCat', action.payload)
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default reducerCat;