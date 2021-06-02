import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const PrivateDebatesNotificationsScreen = props => {
return(
    <View style={styles.screen}>
        <Text>NotificationsScreen of private debates Screen!</Text>
    </View>
);
};

PrivateDebatesNotificationsScreen.navigationOptions = {
    headerTitle: 'Notifications'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PrivateDebatesNotificationsScreen;