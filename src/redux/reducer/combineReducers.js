
import combineReducers from 'redux';

import isSignInReducer from './isSignInReducer';
import getCategoryReducer from './getCategoryReducer';

const reducer=combineReducers({
    isSignIn: isSignInReducer,
    // listCat: getCategoryReducer
})
export default reducer;