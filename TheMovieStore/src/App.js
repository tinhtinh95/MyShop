import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Main from './components/Main';
import reducer from './reducers/reducers'

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}