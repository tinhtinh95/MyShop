import { FETCHING } from './types';
import api from '../api/api';


export function getData(data) {
    return {
        type: FETCHING,
        payload:data
    }
}
export function fetData(){
    return (dispatch)=>{
        //dispatch(getData());
        api().then((data)=>{
            dispatch(getData(data))
        }).catch((err)=>{console.log(err)})
    }
}