import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class NoDataLayout extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon}
                    source={require('../img/ic_lighting.png')} />
                <Text style={styles.title}>No data</Text>
                <Text>There is no data for this favourite.</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    icon: {
        width: 50,
        height: 50
    },
    title:{
        fontSize:20,
    }
})
