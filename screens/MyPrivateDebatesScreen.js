import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const MyPrivateDebatesScreen = props => {
return(
    <View style={styles.screen}>
        <Text> I'm participating in these private debates</Text>
    </View>
);
};

MyPrivateDebatesScreen.navigationOptions = {
    headerTitle: 'My debates'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyPrivateDebatesScreen;