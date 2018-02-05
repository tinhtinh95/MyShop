import *as types from '../actions/actionTypes';

const defaultState = { movies: [], movie: {}, timerCheck: '', reload: '', setting: '' };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_MOVIES:
            return {
                ...state,
                movies: action.movies,
            }
        case types.SET_MOVIE:
            return {
                ...state,
                movie: action.movie,
            }
        case types.CALL_API_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case types.RELOAD:
            return {
                ...state,
                reload: action.reload
            }
        case types.CHANGE_SETTING:
            return {
                ...state,
                setting: action.setting
            }
        default:
            return state;
    }
}

export default reducer;