import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const SearchPeopleScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can search people</Text>
        <Button title="Search public debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'SearchPublicDebate'})
        }}/>
        <Button title="Search private debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'SearchPrivateDebate'})
        }}/>
    </View>
);
};

SearchPeopleScreen.navigationOptions = {
    headerTitle: 'Search'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchPeopleScreen;