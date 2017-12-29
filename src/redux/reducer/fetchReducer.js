// import App from '../App';
import { createStore } from 'redux';
import {FETCHING} from '../../actions/types';


// async function getDataApi() {
//     try {
//       let response = await fetch(
//         'http://localhost/api/'
//       );
//       let responseJson = await response.json();
//       return responseJson.type;
//     } catch (error) {
//       console.error(error);
//     }
//   }

var defaultState = {
    isSignIn: true,
    arrCat: [{ id: 1 }],
    // noname: 1,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return {
                ...state,
                isSignIn: !state.isSignIn,
            }
        // case 'GET_API':
        //     //{
        //     // var newArr=[];
        //     fetch('http://localhost/api/')
        //         .then((response) => response.json())
        //         .then((responseJson) => {
        //             //state.arrCat = [{id:123}];
        //             //alert(state.arrCat);
        //             state = {
        //                 isSignIn: true,
        //                 arrCat: [{ id: 123 }],
        //                 noname: 1,
        //             }
        //             alert(`GET_API =${JSON.stringify(state)} `);
        //         })
        //         .catch((error) => {
        //             alert('error')
        //             console.error(error);
        //         });
        //     // console.log(newArr);
        //     return state;
        // // }

            case FETCHING:
            return {
                ...state,
                arrCat:action.payload,
            }

        default:
            // alert(`default =${JSON.stringify(state)} `);
            return state;
    }
}
// const store = createStore(reducer);
// // store.dispatch({type: 'GET_API'});
// export default store;


