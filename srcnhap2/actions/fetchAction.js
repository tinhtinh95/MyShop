import * as types from './types';
import api from '../api/api';


export function getData() {
    return {
        type: types.FETCHING,
    }
}
export function getDataSuccess(data) {
    return {
        type: types.FETCHING_OK,
        payload:data
    }
}
export function getDataFail() {
    return {
        type: types.FETCHING_FAIL,
    }
}
export function fetchData(){
    return (dispatch)=>{
        dispatch(getData());
        api().then((data)=>{
            dispatch(getDataSuccess(data))
        }).catch(dispatch(getDataFail()))
    }
}