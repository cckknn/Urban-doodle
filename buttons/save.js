import HomeButton from "./HomeButton"

alignItems: "center",
backgroundColor: "##1e90ff",
paddingHorizontal:145,
marginTop: 10,
paddingVertical: 100,
borderWidth: 5,
borderColor: "#20232a",
borderRadius: 6,
backgroundColor: "#61dafb",
color: "#008000",
textAlign: "center",
fontWeight: "bold"



HomeButton

button: {
    paddingHorizontal: 100,
    paddingVertical: 100,
    borderRadius: 10,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 10,
    minWidth: "48%",
    textAlign: "center",
},
container: {
    flex:20,
    padding: 10,
    backgroundColor: "#ffd700"
  },
buttonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral"


}

options={{
    title: '홈',
    tabBarIcon: ({color,size}) => (
        <Icon name="home" color={color} size={size} />
    ),
}} 

detail screen.js

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailScreen({ navigation }) {
    return (
      <View style={{ flex: 1,backgroundColor: 'gold', alignItems: 'center', justifyContent: 'center' }}>
        <Text>SHARE</Text>
        <Button
          title="EXPLORE"
          onPress={() => navigation.navigate('Watch')}
        />
      </View>
    );
  }

  export default DetailScreen; 

  alignSelf: "flex-start",

  <SafeAreaView edges={['bottom']} style={styles.block}>

<View style={styles.container}>
<TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>물건올리기</Text>
            </View>
        </TouchableOpacity>
</View>