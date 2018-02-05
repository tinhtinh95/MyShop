import * as types from './actionTypes';
import API from '../api/Api';
import MovieHelpers from '../models/MovieHeplers';
import {
    AsyncStorage
} from 'react-native'
GLOBAL = require('../Constants');
function setMovies(movies) {
    return {
        type: types.SET_MOVIES,
        movies
    };
};
function setMovie(movie) {
    return {
        type: types.SET_MOVIE,
        movie
    };
}

function setCredits(credits) {
    return {
        type: types.SET_CREDITS,
        credits
    };
};

function setApiFailure() {
    return {
        type: types.CALL_API_FAILURE,
    }
}
function setTimerCheck(timerCheck) {
    return {
        type: types.TIMER_CHECK,
        timerCheck
    }
}
function setReload(reload) {
    return {
        type: types.RELOAD,
        reload
    }
}

function setChangeSetting(setting) {
    return {
        type: types.CHANGE_SETTING,
        setting
    }
}
export function reloadScreen(reload) {
    console.log('reloadScreen', reload)
    return function (dispatch, getState) {
        return dispatch(setReload(reload));
    };
}
export function fetchMovies(page, type) {
    return function (dispatch, getState) {
        return callAPI(page, type)
            .then((res) => res.json())
            .then((movies) => dispatch(setMovies(movies)))
            .catch((err) => dispatch(setApiFailure()));
    };
};
export function callAPI(page, type) {
    if (type == 0) {
        console.log('Call api getPopular');
        return API.getPopular(page);
    } else
        if (type == 1) {
            console.log('Call api getTopRated');
            return API.getTopRated(page);
        } else
            if (type == 2) {
                console.log('Call api getUpcoming');
                return API.getUpcoming(page);
            } else {
                console.log('Call api getNowPlaying');
                return API.getNowPlaying(page);
            }
}

export function fetchMovie(movieId) {
    return function (dispatch, getState) {
        return API.getMovieDetail(movieId)
            .then((res) => res.json())
            .then((movie) => dispatch(setMovie(movie)))
            .catch((err) => dispatch(setApiFailure()));
    };
};

export function fetchCredits(movieId) {
    return function (dispatch, getState) {
        return API.getCredits(movieId)
            .then((res) => res.json())
            .then((credits) => dispatch(setCredits(credits)))
            .catch((err) => console.log(err));
    };
};

export function changeSetting(values) {
    return function (dispatch, getState) {
        return dispatch(setChangeSetting(values));
    }
}
