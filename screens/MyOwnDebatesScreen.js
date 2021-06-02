import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const MyOwnDebatesScreen = props => {
return(
    <View style={styles.screen}>
        <Text> I created these debates</Text>
    </View>
);
};

MyOwnDebatesScreen.navigationOptions = {
    headerTitle: 'My debates'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyOwnDebatesScreen;