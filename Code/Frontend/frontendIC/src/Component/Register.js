import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'

function Register({navigation}) {
const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  confirmpass:""
})

const handleRegister = async () => {
  const url = 'http://172.20.10.2:5000/api/signup';
  var validator = require("email-validator");

  if(user.name ||  user.password || user.email || user.confirmpass){
    if(validator.validate(user.email)){
      if(user.password == user.confirmpass){
        try {
          const response = await axios.post(url, {
            "name": user.name,
            "email": user.email,
            "password": user.password
          });  
          alert("Registration was successfully");
          navigation.navigate('Login');
        } catch (error) {
          alert(error.response.data);
        }
          
      } else {
        alert("Check your password!")
      }
    } else {
        alert("Check your email!")
    }
  }

 
}

const handleChange = (name, value) => {
  setUser(prevState => ({ ...prevState, [name]: value }));
}

  return (
    <KeyboardAwareScrollView
    style={{ backgroundColor: '#fff' }}
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={false}
    >
      <View style={styles.container}>
          <View style={styles.logoStack}>
            <Image
              source={require("../../public/Logo.jpeg")}
              resizeMode="contain"
              style={styles.logo}
            ></Image>
            <Text style={styles.title}>Create account</Text>
          </View>
          <View style={styles.rect}>
            <Text style={styles.namelabel}>Name</Text>
          </View>
          <View style={styles.namebox}>
            <TextInput
              placeholder="Name"
              returnKeyType="next"
              onSubmitEditing={() => this.emailRef.focus()}
              style={styles.predefinednametext}
              placeholderTextColor="rgba(187,187,187,1)"
              onChangeText={value => handleChange("name", value)}
              value={user.name}
            ></TextInput>
          </View>
          <View style={styles.group1}>
            <Text style={styles.emaillabel}>E-mail</Text>
          </View>
          <View style={styles.emailbox}>
            <TextInput
              placeholder="E-mail"
              ref={emailRef => (this.emailRef = emailRef)}
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => this.passwordRef.focus()}
              style={styles.predefinedemailtext}
              placeholderTextColor="rgba(187,187,187,1)"
              onChangeText={value => handleChange("email", value)}
              value={user.email}
            ></TextInput>
          </View>
          <Text style={styles.passlabel}>Password</Text>
          <View style={styles.passbox}>
            <TextInput
              placeholder="Password"
              ref={passwordRef => (this.passwordRef = passwordRef)}
              returnKeyType="next"
              onSubmitEditing={() => this.confirmpasswordRef.focus()}
              autoCorrect={false}
              style={styles.predefinedpasstext}
              placeholderTextColor="rgba(187,187,187,1)"
              onChangeText={value => handleChange("password", value)}
              value={user.password}
              secureTextEntry={true}
            ></TextInput>
          </View>
          <Text style={styles.confirmpasslabel}>Confirm password</Text>
          <View style={styles.passboxconfirm}>
            <TextInput
              placeholder="Confirm password"
              ref={confirmpasswordRef => (this.confirmpasswordRef = confirmpasswordRef)}
              returnKeyType="done"
              autoCorrect={false}
              style={styles.predefinedpassconfirmtext}
              placeholderTextColor="rgba(187,187,187,1)"
              onChangeText={value => handleChange("confirmpass", value)}
              value={user.confirmpass}
              secureTextEntry={true}
            ></TextInput>
          </View>
          <View style={styles.group2}>
            <View style={styles.buttonbox}>
              <View style={styles.group3}>
                <Text style={styles.buttonlabel} onPress={handleRegister}>Register</Text>
              </View>
            </View>
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
    marginTop: 0
  },
  logo: {
    width: 90,
    height: 50
  },
  logoStack: {
    width: 380,
    height: 127
  },
  rect: {
    width: 92,
    height: 31,
    marginLeft: 21
  },
  namelabel: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    width: 114,
    height: 34,
    marginTop: 0
  },
  namebox: {
    width: 270,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55,
    marginTop:0
  },
  predefinednametext: {
    color: "#121212",
    fontSize: 18,
    width: 211,
    height: 24,
    marginTop: 7,
    marginLeft: 9
  },
  group1: {
    width: 90,
    height: 34,
    marginTop: 9,
    marginLeft: 23
  },
  emaillabel: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    width: 114,
    height: 34,
    marginTop: 5
  },
  emailbox: {
    width: 270,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55,
    marginTop: 0
  },
  predefinedemailtext: {
    color: "#121212",
    fontSize: 18,
    width: 211,
    height: 24,
    marginTop: 7,
    marginLeft: 12
  },
  passlabel: {
    color: "#121212",
    fontSize: 22,
    width: 114,
    height: 34,
    marginTop: 10,
    marginLeft: 21,
  },
  passbox: {
    width: 270,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55,
    fontSize: 18,
    marginTop: 0
  },
  predefinedpasstext: {
    color: "#121212",
    fontSize: 18,
    width: 211,
    height: 25,
    marginTop: 7,
    marginLeft: 11
  },
  confirmpasslabel: {
    color: "#121212",
    fontSize: 22,
    width: 212,
    height: 34,
    marginTop: 11,
    marginLeft: 21
  },
  passboxconfirm: {
    width: 270,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 2,
    marginLeft: 55,
    marginTop: 0,
    fontSize: 18
  },
  predefinedpassconfirmtext: {
    color: "#121212",
    fontSize: 18,
    width: 211,
    height: 25,
    marginTop: 7,
    marginLeft: 7
  },
  group2: {
    width: 130,
    height: 37,
    marginLeft: 115,
    marginTop: 55
  },
  buttonbox: {
    width: 130,
    height: 37,
    backgroundColor: "rgba(208,2,27,1)",
    alignContent: "center"
  },
  group3: {
    width: 81,
    height: 24,
    marginTop: 6,
    marginLeft: 25
  },
  buttonlabel: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 81,
    height: 27,
    textAlign: "center"
  }
});

export default Register;
