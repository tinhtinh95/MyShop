import {TOGGLE_SIGNIN} from './types';
import api from '../api/api';


// function GET_CATEGORY(data) {
//     return {
//         type: types.GET_CATEGORY,
//         payload:data
//     }
// }
// export function fetchData(){
//     return (dispatch)=>{
//         //dispatch(GET_CATEGORY());
//         api().then((data)=>{
//             dispatch(GET_CATEGORY(data))
//         }).catch((err)=>{console.log(err)})
//     }
// }
export function Toggle_SignIn(){
    return{
        type: TOGGLE_SIGNIN,
    }
}