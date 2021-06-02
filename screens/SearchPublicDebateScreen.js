import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const SearchPublicDebateScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can search public debates</Text>
    </View>
);
};

SearchPublicDebateScreen.navigationOptions = {
    headerTitle: 'Search'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchPublicDebateScreen;