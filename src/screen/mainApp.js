import React from "react";
import { StyleSheet, View } from "react-native";
// import Home from "./home";
import Home2 from "./home2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./detail";
import Home from "./home";


const Stack = createStackNavigator ();

const mainApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#639cd9',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default mainApp;