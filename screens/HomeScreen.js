import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeButton from '../buttons/HomeButton';
import ShareButton from '../buttons/ShareButton';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',borderWidth: 0.2,
      borderColor: "#20232a", }}>
        <HomeButton 
          text='Share'
          onPress={() => navigation.navigate('Share')}          
        />
        <ShareButton
          text='Watch'
          onPress={() => navigation.navigate('Watch')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 20
    }
  });
  
  export default HomeScreen;