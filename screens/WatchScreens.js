import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function WatchScreen({ navigation }) {
    return (
      <View style={{ flex: 1,backgroundColor: 'gold', alignItems: 'center', justifyContent: 'center' }}>
        <Text>WATCH</Text>
        <Button
          title="HOME"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  export default WatchScreen;