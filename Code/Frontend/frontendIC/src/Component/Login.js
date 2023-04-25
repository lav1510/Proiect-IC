import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  ActivityIndicator
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from 'axios';

function Login({navigation}) {
    
  const [user, setUser] = useState({
    email: "",
    password: ""
})

const handleLogin = async (user) =>{
  const url = '(http://10.9.5.26:5000/api/login';

  try {
    setUser()
    const response = await axios.post(url, {
        "email": user.email,
        "password": user.password,
      });

      console.log(response.data);
      //salvare user
      
      console.log(response.status)
      navigation.navigate('Register');
    } catch (error) {
      console.error(error);
      
    }
  }

  /*axios
  .post(url, user).then((response) => {
    alert('Succesfully conected')
    //salvare user

    navigation.navigate('Register');
    
  })
  .catch(error => {
    alert(response.status);
    console.log(error.JSON());
  })*/


const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((preve) => {
      return {
          ...preve,
          [name]: value
      }
  })
}


  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: '#fff' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.container}>
        <View style={styles.backgroudimageStack}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.emaillabel}>E-mail</Text>
            <View style={styles.emailbox}>
              <TextInput
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordRef.focus()}
                style={styles.predefinedemailtext}
                placeholderTextColor="rgba(187,187,187,1)"
                onChange={handleChange}
              ></TextInput>
            </View>
            <Text style={styles.passlabel}> Password</Text>
            <View style={styles.passbox}>
              <TextInput
                placeholder="Password"
                ref={passwordRef => (this.passwordRef = passwordRef)}
                returnKeyType="done"
                autoCorrect={false}
                style={styles.predefinedpasstext}
                placeholderTextColor="rgba(187,187,187,1)"
                onChange={handleChange}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.group1}>
              <View style={styles.buttonbox} >
                <View style={styles.group2}>
                  <Text style={styles.buttonlabel} onPress={() => {handleLogin(user)}}>Login</Text>
                </View>
              </View>
            </View>
            <View style={styles.questionRow}>
              <Text style={styles.question}>Don't have account?</Text>
              <Text style={styles.gotoregister} onPress={() => navigation.navigate('Register')}>Register now!</Text>
            </View>
          <Image
            source={require("../../public/Logo.jpeg")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </View>
      </View>
    </KeyboardAwareScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  backgroudimage_imageStyle: {},
  title: {
    color: "#121212",
    fontSize: 32,
    width: 390,
    height: 62,
    textAlign: "center",
    marginTop: 110
  },
  emaillabel: {
    color: "#121212",
    fontSize: 24,
    width: 114,
    height: 34,
    marginTop: 30,
    marginLeft: 30
  },
  emailbox: {
    width: 260,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 3,
    marginLeft: 65,
    alignContent: 'center'
  },
  predefinedemailtext: {
    color: "#121212",
    fontSize: 20,
    width: 210,
    height: 25,
    marginTop: 5,
    marginLeft: 9
  },
  passlabel: {
    color: "#121212",
    fontSize: 24,
    width: 114,
    height: 34,
    marginTop: 13,
    marginLeft: 30,
    marginTop:20
  },
  passbox: {
    width: 260,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 3,
    marginLeft: 65,
    alignContent: 'center'
  },
  predefinedpasstext: {
    color: "#121212",
    fontSize: 20,
    width: 210,
    height: 25,
    marginTop: 6,
    marginLeft: 9
  },
  group1: {
    width: 150,
    height: 37,
    marginTop: 51,
    marginLeft: 122
  },
  buttonbox: {
    width: 130,
    height: 37,
    backgroundColor: "rgba(208,2,27,1)",
    marginTop: 20,
    alignContent: "center",
    marginLeft: 10
  },
  group2: {
    width: 111,
    height: 27,
    marginTop: 4,
    marginLeft: 10
  },
  buttonlabel: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center"
  },
  question: {
    color: "#000000",
    fontSize: 18,
    marginTop: 105,
    textAlign: "center"
  },
  gotoregister: {
    color: "#E00001",
    fontSize: 18,
    marginTop: 5,
    textAlign: "center"
  },
  logo: {
    left: 10,
    width: 90,
    height: 120,
    position: "absolute"
  },
  backgroudimageStack: {
    width: 387,
    height: 703,
    marginTop: -36,
    marginLeft: -12
  }
});

export default Login;
