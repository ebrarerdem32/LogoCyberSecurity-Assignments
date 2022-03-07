/*import * as React from 'react';
import { Text, View, StyleSheet,TextInput, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.shape}/>
      
      <Text style={styles.title}>
        Hello
      </Text>
      <TextInput style={styles.textIn}
      placeholder="E-mail" 
      />
       <TextInput style={styles.textIn}
      placeholder="Password" 
      />
      <TouchableOpacity style={styles.touchO}>
      <Text style={styles.touchO}>Login </Text>
            </TouchableOpacity>
      <TouchableOpacity  style={styles.touchO}>
      <Text style={styles.touchO} > Register </Text>
      </TouchableOpacity>
      <Image style={styles.shapetwo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fce6f9',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    frontWeight:'bold',
    color: '#595656',

    
  },
  
  
  textIn:{
      
      borderWidth: 1,
      borderColor: "#E29587",
      width:'80%',
      height: 50,
      padding: 10,
      marginTop: 20,
      borderRadius: 30
      
      },
   shape:{
     opacity: "80%",
    backgroundColor: "#D66D75",
    borderWidth: 1,
    borderColor: "#D66D75",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    padding : 50,
    width:"100%",
    height:"5",
   },
    shapetwo:{
    opacity: "80%",
    backgroundColor: "#D66D75",
    borderWidth: 1,
    borderColor: "#D66D75",
    borderTopLeftRadius:100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding : 50,
    width:"100%",
    height:"5",
    alignItems: "flex-end",
   },

   touchO: {
       
       justifyContent: "space-around",
       alignItems: "center",
       flex:1,
       flexDirection: "row",
       color:'#595656',
       
        
   }
     
   
});*/
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginScreen from "./src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/home";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import * as React from 'react';
import Constants from 'expo-constants';



const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="MainScreen" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fce6f9',
    alignItems: 'center',
  },
  
 
});
