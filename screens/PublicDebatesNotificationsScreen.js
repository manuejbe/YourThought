import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const PublicDebatesNotificationsScreen = props => {
return(
    <View style={styles.screen}>
        <Text>NotificationsScreen of public debates Screen!</Text>
    </View>
);
};

PublicDebatesNotificationsScreen.navigationOptions = {
    headerTitle: 'Notifications'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PublicDebatesNotificationsScreen;