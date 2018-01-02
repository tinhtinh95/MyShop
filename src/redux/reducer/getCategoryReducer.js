import {GET_CATEGORY} from '../../actions/types';

export default getCategoryReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORY:
            state= action.payload;
            return state;
        default:
            return state;
    }
}

