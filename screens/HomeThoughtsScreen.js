import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const HomeThoughtsScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can read thoughts</Text>
        <Button title="Public Debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'HomePublicDebates'})
        }}/>
        <Button title="Private Debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'HomePrivateDebates'})
        }}/>
        <Button title="Thought" onPress={()=>{
            props.navigation.navigate({routeName: 'Thought'})
        }}/>
    </View>
);
};

HomeThoughtsScreen.navigationOptions = {
    headerTitle: 'Home'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeThoughtsScreen;