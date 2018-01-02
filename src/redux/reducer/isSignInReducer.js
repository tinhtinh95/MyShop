import {TOGGLE_SIGNIN} from '../../actions/types';

export default isSignInReducer=(state = true, action) => {
    switch (action.type) {
        case TOGGLE_SIGNIN:
            return !state;
        default:
            return state;
    }
}

