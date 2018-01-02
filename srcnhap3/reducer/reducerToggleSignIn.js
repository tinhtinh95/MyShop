import { TOGGLE_SIGNIN } from '../actions/actiontypes';

const reducerToggleSignIn = (state = true, action) => {
    switch (action.type) {
        case TOGGLE_SIGNIN:
            return !state;
        default:
            return state;
    }
}
export default reducerToggleSignIn;