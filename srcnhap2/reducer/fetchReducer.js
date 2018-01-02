import { createStore } from 'redux';
import * as types from '../actions/types';

var defaultState = {
    isFetching: false,
    arrCat: [],
    fail:false,
    // noname: 1,
}

const reducerFetchData=(state = defaultState, action) => {
    switch (action.type) {
    
            case types.FETCHING:
            return {
               isFetching:true,
               data:[],
               ...state,
            }
            case types.FETCHING_OK:
            return {
                ...state,
                arrCat:action.payload,
                isFetching:false,
            }
            case types.FETCHING_FAIL:
            return {
                ...state,
                isFetching:false,
                fail:true,
            }

        default:
            return state;
    }
}
export default reducerFetchData;

