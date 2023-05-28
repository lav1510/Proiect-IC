import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";   

function UserContact({navigation}){

      return (
        <View style={styles.container}>
          <View style={styles.logo1Stack}>
            <Image
              source={require("../../public/Logo.jpeg")}
              resizeMode="contain"
              style={styles.logo1}
            ></Image>
            <TextInput
              placeholder="Contact US"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.title1}
            ></TextInput>
          </View>
          <View style={styles.rect}>
            <TextInput placeholder="Title" style={styles.textInput}></TextInput>
          </View>
          <View style={styles.rect2}>
            <TextInput
              placeholder="Message"
              numberOfLines={1}
              style={styles.textInput1}
            ></TextInput>
          </View>
          <View style={styles.group1}>
            <View style={styles.buttonbox1}>
              <TextInput
                placeholder="Contact US"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.textInput2}
              ></TextInput>
            </View>
          </View>
        </View>
      );
    }

    
    const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        logo1: {
          top: 0,
          left: 0,
          width: 113,
          height: 96,
          position: "absolute"
        },
        title1: {
          top: 65,
          position: "absolute",
          fontFamily: "comic-sans-ms-regular",
          color: "rgba(0,0,0,1)",
          fontSize: 32,
          width: 304,
          height: 62,
          textAlign: "center",
          left: 37
        },
        logo1Stack: {
          width: 341,
          height: 127,
          marginTop: -8,
          marginLeft: -2
        },
        rect: {
          width: 316,
          height: 34,
          backgroundColor: "rgba(255,246,246,1)",
          marginTop: 35,
          marginLeft: 21
        },
        textInput: {
          fontFamily: "calibri-regular",
          color: "rgba(187,187,187,1)",
          fontSize: 20,
          width: 311,
          height: 34,
          marginLeft: 5
        },
        rect2: {
          width: 311,
          height: 272,
          backgroundColor: "rgba(255,245,245,1)",
          marginTop: 36,
          marginLeft: 26
        },
        textInput1: {
          fontFamily: "calibri-regular",
          color: "rgba(235,37,37,1)",
          fontSize: 20,
          width: 294,
          height: 28,
          textAlign: "justify",
          lineHeight: 0,
          marginTop: 10,
          marginLeft: 7
        },
        group1: {
          width: 130,
          height: 37,
          marginTop: 10,
          marginLeft: 122
        },
        buttonbox1: {
          width: 130,
          height: 37,
          backgroundColor: "rgba(208,2,27,1)"
        },
        textInput2: {
          fontFamily: "roboto-regular",
          color: "#121212",
          fontSize: 19,
          width: 99,
          height: 24,
          marginTop: 6,
          marginLeft: 16
        }
      });
    
export default UserContact;