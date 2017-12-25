import {createStore} from 'redux';

const changeColor={
    color: true,
    id:1,
}

 const reducer=(state=changeColor, action)=>{
    //  switch(action.type){
    //      case 'CHANGE':{
    //         return{
    //             color:!state.color,
    //         }
    //      }
    //  }
    if(action.type ='CHANGE'){
        // ...state,
        alert(state.id);
        return {color:!state.color,id:action.id+1}
    }
 }
 const store=createStore(reducer);
 export default store;