import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailScreen from "./DetailScreen";
import HomeScreen from "./HomeScreen";
import WatchScreen from "./WatchScreens";
import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen}
            options={{
                title:'Home',
                tabBarIcon: ({color, size}) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name = "Share" component = {DetailScreen}
                        options={{
                            title:'Share',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="share" color={color} size={size} />
                            ),
                        }} />
            <Tab.Screen name = "Watch" component = {WatchScreen}
                        options={{
                            title:'Watch',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="search" color={color} size={size} />
                            ),
                        }} />
        </Tab.Navigator>
    );
}

export default MainTab;