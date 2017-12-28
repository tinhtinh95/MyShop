import App from '../App';
import { createStore } from 'redux';


async function getDataApi() {
    try {
      let response = await fetch(
        'http://localhost/api/'
      );
      let responseJson = await response.json();
      return responseJson.type;
    } catch (error) {
      console.error(error);
    }
  }

var defaultState = {
    isSignIn: true,
    arrCat: getDataApi(),
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return {
                ...state,
                isSignIn: !state.isSignIn,
            }
        // case 'GET_API': {
        //     var newArr=
        //     async function fetchData(){
        //         await fetch('http://localhost/api/')
        //             .then((response) => response.json())
        //             .then((responseJson) => {
        //                 return responseJson.type;
        //                 // console.log(responseJson.type);
        //             })
        //             .catch((error) => {
        //                 console.error(error);
        //             });
        //     }; console.log(newArr);
        //     return {
        //         ...state,
        //         arrCat:newArr,
        //     }
        //     // alert(arrCat)
        // }
        default:
            return state;
    }
}
const store = createStore(reducer);
// store.dispatch({type: 'GET_API'});
export default store;


