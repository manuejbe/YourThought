import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const AllNotificationsScreen = props => {
return(
    <View style={styles.screen}>
        <Text>All the notifications!</Text>
        <Button title="Go to public debates notifications!" onPress={()=>{
            props.navigation.navigate({routeName: 'PublicNotificationsScreen'})
        }}/>
        <Button title="Go to private debates notifications!" onPress={()=>{
            props.navigation.navigate({routeName: 'PrivateNotificationScreen'})
        }}/>
    </View>
);
};

AllNotificationsScreen.navigationOptions = {
    headerTitle: 'Notifications'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AllNotificationsScreen;