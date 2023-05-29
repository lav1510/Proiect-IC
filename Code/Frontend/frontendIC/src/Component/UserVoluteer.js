import React, { useState } from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text, Modal, Pressable, Image} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios'

function UserVolunteer(){
    const tShirt = ["S","M", "L", "XL"]
    const getTokenFromStorage = async () => {
      const token = await SecureStore.getItemAsync('token');
      return token;
    };
  
    const [volunteer, setVolunteer] = useState({
      motive: "",
      tshirtsize: ""
    });

    const handleSubmit = async () => {
      const token = await getTokenFromStorage(); 
  
      if (!token) {
        alert("An error ocured. It seems you are not logged in.");
      }
      const url = 'http://192.168.43.106:5000/api/newvolunteer';
      try {
  
        if(!volunteer.motive & !volunteer.tshirtsize){
          alert("Please enter both message and tshirtsize");
          return;
        } else if(!volunteer.motive) {
          alert("Please enter your message");
          return;
        } else if(!volunteer.tshirtsize) {
          alert("Please select tshirtsize");
          return;
        }
  
        const response = await axios.post(url, {
          "token": token,
          "motive": volunteer.motive,
          "tshirtsize": volunteer.tshirtsize,
        }
        );
        
        console.log(response.data);
        setVolunteer({ motive: '', tshirtsize: '' });
        alert('Thank you for your application!')
        
        
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data);
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    }
  
    const handleChange = (name, value) => {
      setVolunteer(prevState => ({ ...prevState, [name]: value }));
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Fii Voluntar! </Text>
            <Text style={styles.textStylequestion}>De ce vrei să te alături echipei noastre? </Text>
            <View style={styles.centeredView}>
                                <TextInput
                                    placeholder={'Mesaj...'}
                                    style={styles.input1}
                                    placeholderTextColor="#8c8c8c"
                                    onChangeText={value => handleChange("motive", value)}
                                    value={volunteer.motive}
                                    />
            </View>
            <Text style={styles.textStyletShirt}>Alege mărimea tricoului!</Text>
            <View style={styles.centeredView}>
            <SelectDropdown
  data={tShirt}
  onSelect={(selectedItem, index) => {
    const updatedVolunteer = {
      ...volunteer,
      tshirtsize: selectedItem
    };
    setVolunteer(updatedVolunteer);
  }}
  buttonTextAfterSelection={(selectedItem, index) => {
    return selectedItem;
  }}
/>
            
                <View style={styles.buttonbox}>
                    <Button title='Be Volunteer' onPress={handleSubmit} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                </View>

            <Image style={styles.image} source={require('../../assets/volunteer.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      title:{
        color: "rgba(208,2,27,1)",
        fontSize: 28,
        fontWeight: 'bold',
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
        borderRadius: 10,
        color: '#000000'
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
      image:{
        width: 500,
        height: 235,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 40
      },
      centeredView:{
        alignItems: 'center'
      },
      textStylequestion:{
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 30
      },
      textStyletShirt:{
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10
      },
});

export default UserVolunteer;