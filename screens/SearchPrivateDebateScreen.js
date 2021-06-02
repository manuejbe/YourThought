import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const SearchPrivateDebateScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can search 4 private debates</Text>
    </View>
);
};

SearchPrivateDebateScreen.navigationOptions = {
    headerTitle: 'Search'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchPrivateDebateScreen;