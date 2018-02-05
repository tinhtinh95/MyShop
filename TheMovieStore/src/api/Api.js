'use strict';

const BASE_URL = 'https://api.themoviedb.org/3/movie/',
    BASE_PARAMS = 'format=json',
    API_KEY = 'api_key=22c6a08b38127f3c23ed414545cf3a08',
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    TOP_RATED = 'top_rated',
    UPCOMING = 'upcoming',
    PAGE = 'page=',
    CREDITS = 'credits';

const Api = {
    getNowPlaying(page) {
        return fetch(`${BASE_URL}${NOW_PLAYING}?${API_KEY}&${PAGE}${page}`);
    },

    getPopular(page) {
        return fetch(`${BASE_URL}${POPULAR}?${API_KEY}&${PAGE}${page}`);
    },

    getTopRated(page) {
        return fetch(`${BASE_URL}${TOP_RATED}?${API_KEY}&${PAGE}${page}`);
    },

    getUpcoming(page) {
        return fetch(`${BASE_URL}${UPCOMING}?${API_KEY}&${PAGE}${page}`);
    },

    getMovieDetail(movieId) {
        return fetch(`${BASE_URL}${movieId}?${API_KEY}`);
    },

    getCredits(movieId) {
        return fetch(`${BASE_URL}${movieId}/${CREDITS}?${API_KEY}`);
    }
};

export default Api;