// import { TOTAL } from '../actions/actiontypes';

// const reducerTotal = (state = 0, action) => {
//     switch (action.type) {
//         case TOTAL:
//             {
//                 console.log('arr: ', action.arr);
//                 const total=0;
//                 if (action.arr != '') {
//                     const arrTotal = action.arr.map(e => {
//                         return e.quantity * e.price;
//                     })
//                     total = arrTotal.reduce((a, b) => a + b);
//                     console.log('total: ', total);
//                     // console.log('state:[]', state);
//                     // return state;
//                     return total;
//                 }else{
//                     return 0;
//                 }

//             }
//         default:
//             {
//                 return state;
//             }
//     }
// }
// export default reducerTotal;