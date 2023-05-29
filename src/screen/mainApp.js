import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./home";
import Home2 from "./home2";

const mainApp = () => {
  return(
    <View style={styles.contain}>
        <Home2/>
   
    </View>
  )


}

const styles=StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:'white'
    }
});

export default mainApp;