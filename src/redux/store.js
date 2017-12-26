import App from '../App';
import {createStore} from 'redux';


const defaulState={
    isSignIn:true,
}

const reducer=(state=defaulState, action)=>{
    switch(action.type){
        case 'TOGGLE_SIGNIN':
        return{
            ...state,
            isSignIn:!state.isSignIn,
        }
        default:
        return state;
    }
}
const store=createStore(reducer);
export default store;


