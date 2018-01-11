
import {combineReducers} from 'redux';
import reducerCat from './reducerCat';
import reducerProduct from './reducerProduct';
import reducerToggleSignIn from './reducerToggleSignIn';
import reducerCart from './reducerCart';
import reducerAccount from './reducerAccount';


const reducer=combineReducers({
    listCat:reducerCat,
    listProduct:reducerProduct,
    listCart:reducerCart,
    toggle_signin:reducerToggleSignIn,
    toggle_account:reducerAccount,
})
export default reducer;