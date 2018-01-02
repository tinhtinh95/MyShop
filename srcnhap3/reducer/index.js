
import {combineReducers} from 'redux';
import reducerCat from './reducerCat';
import reducerToggleSignIn from './reducerToggleSignIn';


const reducer=combineReducers({
    listCat:reducerCat,
    toggle_signin:reducerToggleSignIn,
})
export default reducer;