import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroudimageStack}>
        <ImageBackground
          source={require("../../public/Background.jpg")}
          resizeMode="repeat"
          style={styles.backgroudimage}
          imageStyle={styles.backgroudimage_imageStyle}
        >
          <Text style={styles.title}>Autentificare</Text>
          <Text style={styles.emaillabel}>E-mail</Text>
          <View style={styles.emailbox}>
            <TextInput
              placeholder="E-mail"
              style={styles.predefinedemailtext}
            ></TextInput>
          </View>
          <TextInput
            placeholder="Parola"
            placeholderTextColor="rgba(0,0,0,1)"
            style={styles.passlabel}
          ></TextInput>
          <View style={styles.passbox}>
            <TextInput
              placeholder="Parola"
              style={styles.predefinedpasstext}
            ></TextInput>
          </View>
          <View style={styles.group1}>
            <View style={styles.buttonbox}>
              <View style={styles.group2}>
                <Text style={styles.buttonlabel}>Autentificare</Text>
              </View>
            </View>
          </View>
          <View style={styles.questionRow}>
            <Text style={styles.question}>Nu ai cont?</Text>
            <Text style={styles.gotoregister}>Înregistrează-te acum!</Text>
          </View>
        </ImageBackground>
        <Image
          source={require("../../public/Logo.jpeg")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(166,166,166,1)"
  },
  backgroudimage: {
    width: 375,
    height: 667,
    position: "absolute",
    top: 36,
    left: 12
  },
  backgroudimage_imageStyle: {},
  title: {
    color: "#121212",
    fontSize: 32,
    width: 304,
    height: 62,
    textAlign: "center",
    marginTop: 173,
    marginLeft: 45
  },
  emaillabel: {
    color: "#121212",
    fontSize: 24,
    width: 114,
    height: 34,
    marginTop: 15,
    marginLeft: 10
  },
  emailbox: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 6,
    marginLeft: 65
  },
  predefinedemailtext: {
    color: "rgba(187,187,187,1)",
    fontSize: 20,
    width: 77,
    height: 25,
    marginTop: 6,
    marginLeft: 9
  },
  passlabel: {
    color: "#121212",
    fontSize: 24,
    width: 114,
    height: 34,
    marginTop: 13,
    marginLeft: 10
  },
  passbox: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 6,
    marginLeft: 65
  },
  predefinedpasstext: {
    color: "rgba(187,187,187,1)",
    fontSize: 20,
    width: 77,
    height: 25,
    marginTop: 6,
    marginLeft: 9
  },
  group1: {
    width: 130,
    height: 37,
    marginTop: 51,
    marginLeft: 122
  },
  buttonbox: {
    width: 130,
    height: 37,
    backgroundColor: "rgba(208,2,27,1)"
  },
  group2: {
    width: 111,
    height: 27,
    marginTop: 4,
    marginLeft: 10
  },
  buttonlabel: {
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  question: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 101,
    marginLeft: 132
  },
  gotoregister: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 91
  },
  logo: {
    top: 0,
    left: 0,
    width: 251,
    height: 209,
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
