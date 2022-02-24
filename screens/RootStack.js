import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import HomeScreen from "./HomeScreen";
import WriteScreen from "./WriteScreen";
import DetailScreen from "./DetailScreen";
import WatchScreen from "./WatchScreens";

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
        name = "MainTab"
        component = {MainTab}
        options = {{headerShown: false}}
        />
        <Stack.Screen name="Write" component = {WriteScreen} />
        <Stack.Screen name="Home" component = {HomeScreen} />
        <Stack.Screen name="Share" component = {DetailScreen} />
        <Stack.Screen name="Watch" component = {WatchScreen} />
        </Stack.Navigator>
    );
}

export default RootStack;