// export function toggleIsAdding() {
//     return { type: 'TOGGLE_IS_ADDING' };
// }
// export function toggleMemorized(id) {
//     return { type: 'TOGGLE_MEMORIZED',id };
// }
// export function toggleShow(id) {
//     return { type: 'TOGGLE_SHOW',id };
// }
// export function add_word(en,vn) {
//     return { type: 'ADD_WORD', en,vn }; // thuoc tinh id va isShow da gan gia tri roi, k can goi nua
// }
// export function filter_show_all() {
//     return { type: 'FILTER_SHOW_ALL'}; // thuoc tinh id va isShow da gan gia tri roi, k can goi nua
// }
// export function filter_memorized() {
//     return { type: 'FILTER_MEMORIZED' }; // thuoc tinh id va isShow da gan gia tri roi, k can goi nua
// }
// export function filter_need_practice() {
//     return { type: 'FILTER_NEED_PRACTICE'}; // thuoc tinh id va isShow da gan gia tri roi, k can goi nua
// }
// import * as types from './actiontypes';
// import dataEmployee from '../reducer/dataEmployee.json';


export function getData() {
    return {
        type: 'GET_DATA',
        
    }
}