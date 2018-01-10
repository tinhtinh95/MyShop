
import {combineReducers} from 'redux';
import reducerCat from './reducerCat';
import reducerProduct from './reducerProduct';
import reducerToggleSignIn from './reducerToggleSignIn';
import reducerCart from './reducerCart';
import reducerTotal from './reducerTotal';


const reducer=combineReducers({
    listCat:reducerCat,
    listProduct:reducerProduct,
    listCart:reducerCart,
    toggle_signin:reducerToggleSignIn,
    totalAll:reducerTotal,
})
export default reducer;