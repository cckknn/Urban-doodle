import * as React from 'react';
import { View, Text, Button, StyleSheet,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function DetailScreen({ navigation,onPress,KeyboardAvoidingComponent  }) {
    return (
      <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
      <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>물건올리기</Text>
            </View>
        </TouchableOpacity>
</View>
        <TextInput placeholder='제목' style={styles.textInput2}  />
        <TextInput placeholder='가격' style={styles.textInput3}  />
        <TextInput placeholder='내용' style={styles.textInput4}  />
        <Button title="Submit" onPress={() => null} />
      </SafeAreaView>  
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
  block: { 
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    height:100,
    paddingHorizontal:0,
    borderColor:'#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderWidth: 0.2,
    
  },
  textInput1: {
    flexDirection: "row",
        height: 100,
        padding: 20,
  },
  textInput2: {
    flex: 0.5,
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 0.3,
    marginBottom: 1
  },
  textInput3: {
    flex: 0.5,
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 0.3,
    marginBottom: 1
  },
  textInput4: {
    flex: 10,
    height: 10,
    borderColor: "#000000",
    borderBottomWidth: 0.3,
    marginBottom: 1
  },
  container: {
    flex: 1.9,
    height: 30,
    borderColor: "#000000",
    borderBottomWidth: 0.2,
    marginBottom: 1
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 29,
    borderRadius: 5,
    backgroundColor: "coral",
    marginHorizontal: "0%",
    marginBottom: 0,
    minWidth: "20%",
    textAlign: "center",
    borderColor: "grey",
    overflow: 'hidden',
    alignSelf: "flex-start",
    borderColor: 'grey',
},
buttonText: {
    fontSize: 10,
    fontWeight: "10",
    color: "white"
},

  });
  export default DetailScreen; 