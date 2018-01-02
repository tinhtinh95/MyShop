import * as types from './actiontypes';
// import dataEmployee from '../reducer/dataEmployee.json';
import API from '../api/api';

function getData(data) {
    return {
        type: types.GET_DATA,
        // payload:api
        payload: data,

    }
}
export function fetchData(name) {
    return (dispatch) => {
        API.getList(name).then((data) => {
            dispatch(getData(data))
        })
            .catch((err) => console.log(err))
    }
   
}

export function toggle_signin() {
    return {
        type: types.TOGGLE_SIGNIN,
    }
}
