import * as types from './actiontypes';
// import dataEmployee from '../reducer/dataEmployee.json';
import API from '../api/api';

function getDataCat(data) {
    return {
        type: types.GET_CATEGORY,
        // payload:api
        payload: data,

    }
}
function getDataProduct(data) {
    return {
        type: types.GET_PRODUCT,
        payload: data,

    }
}
export function fetchData(name) {
    return (dispatch) => {
        API.getList(name).then((data) => {
            if (name === 'type') {
                dispatch(getDataCat(data));
            } else if (name === 'product'){
                dispatch(getDataProduct(data));
            }
            
        })
            .catch((err) => console.log(err))
    }
   
}

export function toggle_signin() {
    return {
        type: types.TOGGLE_SIGNIN,
    }
}

export function add_cart(data){
    return {
        type:types.ADD_CART,
        payload:data,
        // payCount:quantity,
    }
}
