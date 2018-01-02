// import {GET_DATA} from '../actions/actiontypes';

const Default_state={
    isTrue: true,
}

const reducerEmploye = (state=Default_state, action)=>{
    if (action.type === "GET_DATA") return {
        isTrue:!state.isTrue,
    };
    return state;
}
export default reducerEmploye;
