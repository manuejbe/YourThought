import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const MyPublicDebatesScreen = props => {
return(
    <View style={styles.screen}>
        <Text> I'm participating in these public debates</Text>
        <Button title="Go to my private debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'MyPrivateDebates'})
        }}/>
        <Button title="Go to my own debates!" onPress={()=>{
            props.navigation.navigate({routeName: 'MyOwnDebates'})
        }}/>
    </View>
);
};

MyPublicDebatesScreen.navigationOptions = {
    headerTitle: 'My debates'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyPublicDebatesScreen;