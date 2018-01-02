
import combineReducers from 'redux';
import {reducerFetchData} from './fetchReducer';

const reducer=combineReducers({
    myData:reducerFetchData
});
export default reducer;