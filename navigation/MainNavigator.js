import React from 'react';
import { createAppContainer, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeThoughtsScreen from '../screens/HomeThoughtsScreen';
import HomePublicDebatesScreen from '../screens/HomePublicDebatesScreen';
import HomePrivateDebatesScreen from '../screens/HomePrivateDebatesScreen';
import SearchPeopleScreen from '../screens/SearchPeopleScreen';
import SearchPublicDebateScreen from '../screens/SearchPublicDebateScreen';
import SearchPrivateDebateScreen from '../screens/SearchPrivateDebateScreen';
import AllNotificationsScreen from '../screens/AllNotificationsScreen';
import PublicDebatesNotificationsScreen from '../screens/PublicDebatesNotificationsScreen';
import PrivateDebatesNotificationsScreen from '../screens/PrivateDebatesNotificationsScreen';
import MyPublicDebatesScreen from '../screens/MyPublicDebatesScreen';
import MyPrivateDebatesScreen from '../screens/MyPrivateDebatesScreen';
import MyOwnDebatesScreen from '../screens/MyOwnDebatesScreen';
import DirectMessagesScreen from '../screens/DirectMessagesScreen';
import InThoughtScreen from '../screens/InThoughtScreen';
import InDebateScreen from '../screens/InDebateScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';


const HomeNavigator = createStackNavigator({
    HomeThoughts: {
        screen: HomeThoughtsScreen
    },
    Thought: {
        screen: InThoughtScreen
    },
    Debate: {
        screen: InDebateScreen
    },
    HomePublicDebates: {
        screen: HomePublicDebatesScreen
    },
    HomePrivateDebates: {
        screen: HomePrivateDebatesScreen
    }
});

const SearchNavigator = createStackNavigator({
    SearchPeople: {
        screen: SearchPeopleScreen
    },
    SearchPublicDebate: {
        screen: SearchPublicDebateScreen
    },
    SearchPrivateDebate: {
        screen: SearchPrivateDebateScreen
    }
});

const NotificationsNavigator = createStackNavigator({
    AllNotifications: {
        screen: AllNotificationsScreen
    },
    PublicNotificationsScreen:{
        screen: PublicDebatesNotificationsScreen
    },
    PrivateNotificationScreen:{
        screen: PrivateDebatesNotificationsScreen
    }
});

const MyDebatesNavigator = createStackNavigator({
    MyPublicDebates: {
        screen: MyPublicDebatesScreen
    },
    MyPrivateDebates: {
        screen: MyPrivateDebatesScreen
    },
    MyOwnDebates: {
        screen: MyOwnDebatesScreen
    }
});

const MainTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions:{
            tabBarLabel:() => {return null},
            tabBarIcon: (tabInfo) => {
                return <Entypo name="home" size={24} color={tabInfo.tintColor}/>;
            }
        }
    },
    Search: {
        screen: SearchNavigator,
        navigationOptions:{
            tabBarLabel:() => {return null},
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-search" size={24} color={tabInfo.tintColor} />;
            }
        }
    },
    Notifications: {
        screen: NotificationsNavigator,
        navigationOptions:{
            tabBarLabel:() => {return null},
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="notifications" size={24} color={tabInfo.tintColor} />;
            }
        }
    },
    MyDebates: {
        screen: MyDebatesNavigator,
        navigationOptions:{
            tabBarLabel:() => {return null},
            tabBarIcon: (tabInfo) => {
                return <FontAwesome5 name="people-carry" size={24} color={tabInfo.tintColor} />;
            }
        }
    },
    DirectMessages: {
        screen: DirectMessagesScreen,
        navigationOptions:{
            tabBarLabel:() => {return null},
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="mail" size={24} color={tabInfo.tintColor} />;
            }
        }
    }
    
},{tabBarOptions:{
    activeTintColor: Colors.primaryColor
}
}
);

export default createAppContainer(MainTabNavigator); 