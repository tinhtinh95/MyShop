import { TOGGLE_ACCOUNT } from '../actions/actiontypes';

const reducerAccount = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_ACCOUNT:
            return !state;
        default:
            return state;
    }
}
export default reducerAccount;