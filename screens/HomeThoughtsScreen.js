import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderConfigurationButton';

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

HomeThoughtsScreen.navigationOptions = navigationdata => {
    return{
        headerTitle: 'Home',
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='cfg' 
                iconName='settings' 
                onPress={() =>{
                    console.log('Pressed the cfg button');
                }}
            />
        </HeaderButtons>
        )
    };
};

const styles= StyleSheet.create({
    screen: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeThoughtsScreen;