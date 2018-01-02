
import {combineReducers} from 'redux';
import reducerCat from './reducerCat';
import reducerProduct from './reducerProduct';
import reducerToggleSignIn from './reducerToggleSignIn';


const reducer=combineReducers({
    listCat:reducerCat,
    listProduct:reducerProduct,
    toggle_signin:reducerToggleSignIn,
})
export default reducer;