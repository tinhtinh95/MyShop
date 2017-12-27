import App from '../App';
import { createStore } from 'redux';



var defaultState = {
    isSignIn: true,
    arrCat:[{id:11110}]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return {
                ...state,
                isSignIn: !state.isSignIn,
            }
        case 'GET_API': {
            var newArr=[];
            // fetchData = () => {
                fetch('http://localhost/api/')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        state.arrCat=responseJson.type;
                        console.log(newArr);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            // }
            
            return {
                ...state,
                arrCat:[fetch('http://localhost/api/')
                .then((response) => response.json())
                .then((responseJson) => {
                    return responseJson.type;
                    // console.log(newArr);
                })]
                // .catch((error) => {
                //     console.error(error);
                // }),
                // arrCat:{arrCat},
            }
            // alert(arrCat)
        }
        default:
            return state;
    }
}
const store = createStore(reducer);
// store.dispatch({type: 'GET_API'});
export default store;


