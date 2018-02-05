import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import { DrawerStack } from '../routes';
import PushNotificationController from "../Notification/PushNotificationController";
export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <DrawerStack />
                <PushNotificationController/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
}); 