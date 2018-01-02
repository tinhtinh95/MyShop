import { GET_DATA } from '../actions/actiontypes';

const reducerCat = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            state= action.payload;
            return state;
        default:
            return state;
    }
}
export default reducerCat;