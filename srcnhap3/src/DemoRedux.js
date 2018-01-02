import React,{Component} from 'react';
import {} from 'react-native';
import Filter from './components/Filter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './redux/store';


export default class DemoRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <Filter />
            </Provider>
        )
    }
}

