import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../public/Background.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.image2Stack}>
          <Image
            source={require("../../public/Logo.jpeg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.autentificare}>Autentificare</Text>
        </View>
        <Text style={styles.eMail}>E-mail</Text>
        <View style={styles.rect}>
          <Text style={styles.eMail2}>E-mail</Text>
        </View>
        <Text style={styles.password}>Password</Text>
        <View style={styles.rect1}>
          <Text style={styles.password1}>Password</Text>
        </View>
        <Text style={styles.loremIpsum}></Text>
        <View style={styles.rect2}>
          <Text style={styles.autentificare2}>Autentificare</Text>
        </View>
        <View style={styles.nuAiContRow}>
          <Text style={styles.nuAiCont}>Nu ai cont?</Text>
          <Text style={styles.loremIpsum2}>Înregistrează-te acum!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  image: {
    width: 522,
    height: 826,
    marginTop: -53,
    marginLeft: -81
  },
  image_imageStyle: {},
  image2: {
    top: 0,
    left: 0,
    width: 251,
    height: 209,
    position: "absolute"
  },
  autentificare: {
    top: 178,
    position: "absolute",
    color: "#121212",
    fontSize: 32,
    left: 48,
    width: 304,
    height: 62,
    textAlign: "center"
  },
  image2Stack: {
    width: 352,
    height: 240,
    marginTop: 39,
    marginLeft: 69
  },
  eMail: {
    color: "#121212",
    fontSize: 24,
    width: 114,
    height: 34,
    marginLeft: 89
  },
  rect: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 148
  },
  eMail2: {
    color: "rgba(187,187,187,1)",
    fontSize: 20,
    width: 84,
    height: 25,
    marginTop: 7,
    marginLeft: 7
  },
  password: {
    color: "#121212",
    fontSize: 24,
    marginTop: 1,
    marginLeft: 91
  },
  rect1: {
    width: 229,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginTop: 9,
    marginLeft: 146
  },
  password1: {
    color: "rgba(187,187,187,1)",
    fontSize: 20,
    marginTop: 6,
    marginLeft: 9
  },
  loremIpsum: {
    color: "#121212",
    marginLeft: 131
  },
  rect2: {
    width: 130,
    height: 37,
    backgroundColor: "rgba(208,2,27,1)",
    marginTop: 100,
    marginLeft: 205
  },
  autentificare2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7,
    marginLeft: 9
  },
  nuAiCont: {
    color: "#121212",
    fontSize: 18
  },
  loremIpsum2: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 10
  },
  nuAiContRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 117,
    marginRight: 106
  }
});

export default Login;
