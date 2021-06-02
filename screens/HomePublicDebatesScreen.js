import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const HomePublicDebatesScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can read public debates</Text>
        <Button title="Debate" onPress={()=>{
            props.navigation.navigate({routeName: 'Debate'})
        }}/>
    </View>
);
};

HomePublicDebatesScreen.navigationOptions = {
    headerTitle: 'Home'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomePublicDebatesScreen;