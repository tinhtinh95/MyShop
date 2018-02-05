/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class SplashScreen extends Component {

    render() {
        return (
            <View style={splash_styles._container}>
                <View style={splash_styles._container}>
                    <Image style={splash_styles._img}
                        source={{ uri: 'https://lh3.ggpht.com/W6hBEJOIyPeH3JWO7INKNtqsXIOw9Bi3_D0_kZK9NxXo334_rm09tgrtzuiayjBa14M=w300-rw' }}>
                    </Image>
                    <Text style={splash_styles._title}>
                        The movies store
                    </Text>
                </View>
                <View>
                    <Text style={splash_styles._coppyRight}>
                        Coppy right @2017 - Fairly
                    </Text>
                </View>
            </View>
        );
    }
}

const splash_styles = StyleSheet.create({
    _container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1abc9c'
    },

    _img: {
        width: 200,
        height: 200,

    },

    _title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ecf0f1'
    },

    _coppyRight: {
        fontSize: 11,
        padding: 10,
        color: '#ecf0f1'
    }
});

