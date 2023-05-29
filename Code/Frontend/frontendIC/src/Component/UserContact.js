import * as SecureStore from 'expo-secure-store';
import React, { Component, useState } from "react";
import { StyleSheet, View, Image, TextInput, Text, Button, Alert, Keyboard } from "react-native";   
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'

function UserContact(){

  const getTokenFromStorage = async () => {
    const token = await SecureStore.getItemAsync('token');
    return token;
  };

  const [contact, setContact] = useState({
    title: "",
    message: ""
  });

  const handleSubmit = async () => {
    const token = await getTokenFromStorage(); 

    if (!token) {
      alert("An error ocured. It seems you are not logged in.");
    }
    const url = 'http://192.168.43.106:5000/api/newcontact';
    try {

      if(!contact.title & !contact.message){
        alert("Please enter both title and message");
        return;
      } else if(!contact.title) {
        alert("Please enter title");
        return;
      } else if(!contact.message) {
        alert("Please enter message");
        return;
      }

      const response = await axios.post(url, {
        "token": token,
        "title": contact.title,
        "message": contact.message,
      }
      );
      
      setContact({ title: '', message: '' });
      console.log(response.data);
      alert('Thank you for your message!')
      
    } catch (error) {
      alert(error.response.data);
    }
  }

  const handleChange = (name, value) => {
    setContact(prevState => ({ ...prevState, [name]: value }));
  }
  
      return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: '#fff' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}>
            <Image style={styles.image} source={require('../../public/Logo.jpeg')} resizeMode="contain"/>
            <Text style={styles.title}> Contact Us! </Text>
            <View style={styles.centeredView}>
                <TextInput
                    placeholder={'Subiect'}
                    style={styles.input1}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={value => handleChange("title", value)}
                    value={contact.title}
                />
                <TextInput
                    placeholder={'Mesaj...'}
                    multiline={true}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.input2}
                    placeholderTextColor="#8c8c8c"
                    onChangeText={value => handleChange("message", value)}
                    value={contact.message}
                />
                <View style={styles.buttonbox}>
                    <Button title='Submit' onPress={handleSubmit} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                </View>
            </View>
        </KeyboardAwareScrollView>
      );
    }

    
    const styles = StyleSheet.create({
       container: {
          flex: 1,
          backgroundColor: '#fff',
      },
      image: {
        width: 100,
        height: 60,
        position: "absolute"
      },
      title:{
        color: "rgba(208,2,27,1)",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 60
      },
      input1: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        marginTop: 50,
        borderRadius: 10,
        color: '#000000'
      }, 
      input2: {
        width: 300,
        height: 200,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 10,
        color: '#000000'
      },
      centeredView:{
        alignItems: 'center'
      },
      buttonbox: { 
        width: 130,
        backgroundColor: 'rgba(208,2,27,1)',
        borderRadius: 10,
        padding: 0,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10,
        marginTop: 60,
        alignItems: 'center'
    },
      });
    
export default UserContact;