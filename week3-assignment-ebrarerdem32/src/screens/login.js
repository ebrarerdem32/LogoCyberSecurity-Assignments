import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity, Image
} from "react-native";
import { auth } from "../../firebase-auth";
import 'firebase/firestore';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // console.log("Constructor çalıştı");
    this.state = {
      userName: "",
      password: "",
    };
  }

  styles = StyleSheet.create(
   {
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
    txtInput: {
      borderWidth: 1.5,
      backgroundColor: "white",
      borderColor: "#535353",
      height: "80",
      padding: 5,
      margin: 10,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
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
   textIn:{
      
      borderWidth: 1,
      borderColor: "#E29587",
      width:'80%',
      height: 50,
      padding: 10,
      marginTop: 20,
      borderRadius: 30
      
      },
      touchO: {
       
       justifyContent: "space-around",
       alignItems: "center",
       flex:1,
       flexDirection: "row",
       color:'#595656',
       
        
   }
    
  });

  loginHandler = () => {
    console.log(this.props);
    // const { navigate } = this.props.navigation;
    // console.log(navigate);
    // auth
    //   .signInWithEmailAndPassword(this.state.userName, this.state.password)
    //   .then((uc) => {
    //     if (uc.user) {
    //       this.props.navigation.navigate("MainScreen");
    //     } else {
    //       console.log("Kullanıcı bulunamadı");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.userName, this.state.password)
      .then((uc) => {
        if (uc.user) {
         // Geçiş yap
         this.props.navigation.navigate("Home");
        } else {
          console.log("kullanıcı yaratılamadı");
        }
      })
      .catch((error) => {
        console.log(error);
      });


      auth.signOut().then(()=>{}).catch(error=>{})
  };

  render() {
    return (
      <View>
        <Image style={styles.shape}></Image>
        
         <Text style={styles.title}>
               Welcome to My App
         </Text>
        <TextInput
          style={styles.textIn}
          value={this.state.userName}
          onChangeText={(text) => {
            this.setState({
              userName: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={styles.Text}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        ></TextInput>
        <View>
          <TouchableOpacity onPress={this.loginHandler}
          style={styles.TouchO}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.registerHandler}
          style={styles.TouchO}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.shapetwo}></Image>
      </View>

    );
  }
}
