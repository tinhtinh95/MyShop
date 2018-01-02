import * as types from './actiontypes';
// import dataEmployee from '../reducer/dataEmployee.json';
import api from '../api/api';

function getData(data) {
    return {
        type: types.GET_DATA,
        // payload:api
        payload: data,
        
    }
}
export function fetchData(){
    return (dispatch)=>{
        // dispatch(getData());
        api().then((data)=>{
            dispatch(getData(data))
        }).catch((err)=>console.log(err))
    }
}

export function toggle_signin(){
    return {
        type: types.TOGGLE_SIGNIN,
    }
}
