import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";

function Register(props) {

const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  confirmpassword: ""
})

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
    <View style={styles.container}>
      <ImageBackground
        source={require("../../public/Background.jpg")}
        resizeMode="repeat"
        style={styles.backgroudimage1}
        imageStyle={styles.backgroudimage1_imageStyle}
      >
        <View style={styles.logoStack}>
          <Image
            source={require("../../public/Logo.jpeg")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
          <TextInput
            placeholder="Create account"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.title}
          ></TextInput>
        </View>
        <View style={styles.rect}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.namelabel}
          ></TextInput>
        </View>
        <View style={styles.namebox}>
          <TextInput
            placeholder="Name"
            style={styles.predefinednametext}
            placeholderTextColor="rgba(187,187,187,1)"
            onChange={handleChange}
          ></TextInput>
        </View>
        <View style={styles.group1}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.emaillabel}
          ></TextInput>
        </View>
        <View style={styles.emailbox}>
          <TextInput
            placeholder="E-mail"
            style={styles.predefinedemailtext}
            placeholderTextColor="rgba(187,187,187,1)"
            onChange={handleChange}
          ></TextInput>
        </View>
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.passlabel}
        ></TextInput>
        <View style={styles.passbox}>
          <TextInput
            placeholder="Password"
            style={styles.predefinedpasstext}
            placeholderTextColor="rgba(187,187,187,1)"
            onChange={handleChange}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.confirmpasslabel}
        ></TextInput>
        <View style={styles.passboxconfirm}>
          <TextInput
            placeholder="Confirm password"
            style={styles.predefinedpassconfirmtext}
            placeholderTextColor="rgba(187,187,187,1)"
            onChange={handleChange}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View style={styles.group2}>
          <View style={styles.buttonbox}>
            <View style={styles.group3}>
              <TextInput
                placeholder="Register"
                placeholderTextColor="rgba(255,255,255,1)"
                style={styles.buttonlabel}
              ></TextInput>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroudimage1: {
    width: 390,
    height: 667
  },
  backgroudimage1_imageStyle: {},
  logo: {
    top: 0,
    left: 0,
    width: 113,
    height: 96,
    position: "absolute"
  },
  title: {
    top: 85,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    width: 304,
    height: 62,
    textAlign: "center",
    left: 23
  },
  logoStack: {
    width: 327,
    height: 127
  },
  rect: {
    width: 92,
    height: 31,
    marginTop: 27,
    marginLeft: 21
  },
  namelabel: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    width: 114,
    height: 34
  },
  namebox: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55
  },
  predefinednametext: {
    color: "#121212",
    fontSize: 20,
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
    fontSize: 20,
    width: 114,
    height: 34
  },
  emailbox: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55
  },
  predefinedemailtext: {
    color: "#121212",
    fontSize: 20,
    width: 211,
    height: 24,
    marginTop: 6,
    marginLeft: 12
  },
  passlabel: {
    color: "#121212",
    fontSize: 20,
    width: 114,
    height: 34,
    marginTop: 9,
    marginLeft: 21
  },
  passbox: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 55
  },
  predefinedpasstext: {
    color: "#121212",
    fontSize: 20,
    width: 211,
    height: 25,
    marginTop: 6,
    marginLeft: 11
  },
  confirmpasslabel: {
    color: "#121212",
    fontSize: 20,
    width: 212,
    height: 34,
    marginTop: 9,
    marginLeft: 21
  },
  passboxconfirm: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 2,
    marginLeft: 55
  },
  predefinedpassconfirmtext: {
    color: "#121212",
    fontSize: 20,
    width: 211,
    height: 25,
    marginTop: 7,
    marginLeft: 7
  },
  group2: {
    width: 130,
    height: 37,
    marginTop: 79,
    marginLeft: 107
  },
  buttonbox: {
    width: 130,
    height: 37,
    backgroundColor: "rgba(208,2,27,1)",
    bottom: 10
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
    height: 27
  }
});

export default Register;
