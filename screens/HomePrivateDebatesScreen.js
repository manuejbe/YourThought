import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const HomePrivateDebatesScreen = props => {
return(
    <View style={styles.screen}>
        <Text>Here u can see private debates</Text>
        <Button title="Debate" onPress={()=>{
            props.navigation.navigate({routeName: 'Debate'})
        }}/>
    </View>
);
};

HomePrivateDebatesScreen.navigationOptions = {
    headerTitle: 'Home'
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomePrivateDebatesScreen;