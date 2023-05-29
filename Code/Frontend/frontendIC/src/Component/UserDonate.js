import React, {useState} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text, Modal, Pressable, Image} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios'

function UserDonate(){
    const [modalVisible, setModalVisible] = useState(false);

    const getTokenFromStorage = async () => {
      const token = await SecureStore.getItemAsync('token');
      return token;
    };
  
    const [donate, setDonate] = useState({
      amount: "",
      card_number: "",
      charholder_name: "",
      cvc: "",
      exp_date: "",
    });
  
    const handleSubmit = async () => {
      const token = await getTokenFromStorage(); 
  
      if (!token) {
        alert("An error ocured. It seems you are not logged in.");
      }
      const url = 'http://192.168.43.106:5000/api/newdonation';
      try {
  
        if(!donate.amount && !donate.card_number && !donate.charholder_name && !donate.cvc && !donate.exp_date){
          alert("Please complete all fields");
          return;
        } else if(!donate.card_number) {
          alert("Please enter card number");
          return;
        } else if(!donate.charholder_name) {
          alert("Please enter cardholder name");
          return;
        } else if(!donate.cvc) {
          alert("Please enter CVC");
          return;
        } else if(!donate.exp_date) {
          alert("Please enter expiration date");
          return;
        }
  
        console.log(donate);
        const response = await axios.post(url, {
          "token": token,
          "amount": donate.amount,
          "card_number": donate.card_number,
          "charholder_name": donate.charholder_name,
          "cvc": donate.cvc,
          "exp_date": donate.exp_date
        }
        );

        console.log(response.data);
        setDonate({
          amount: "",
          card_number: "",
          charholder_name: "",
          cvc: "",
          exp_date: ""
        });

        alert('Thank you for your donation!')
        setModalVisible(!modalVisible);
        
      } catch (error) {
        alert(error.response.data);
      }
    }
  
    const handleChange = (name, value) => {
      setDonate(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: '#fff' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/donate.png')} />
                <Text style={styles.title}> Donează și tu! </Text>
                <Text style={styles.paragraph}>Puteți să donați orice sumă doriți începând cu suma minimă de 5 RON. Pentru sume mai mici de 5 RON, puteți dona direct în contul asociației Action for People RO19BRDE160SV45551251600.                               De asemenea, puteți dona și jucării, haine sau alimente neperisabile. În acest caz, trimiteți-ne mesaj pe pagina de contact pentru a le prelua.</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView}>
                            <Text style={styles.modalText}>Donate Form</Text>
                            <Text style={styles.textStyleamount}>Amount </Text>
                            <View style={styles.centeredView}>
                            <NumericInput
                                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                totalWidth={200} 
                                totalHeight={50} 
                                iconSize={25}
                                step={1}
                                valueType='real'
                                rounded 
                                textColor='black' 
                                iconStyle={{ color: 'white' }} 
                                rightButtonBackgroundColor='#e3021d' 
                                leftButtonBackgroundColor='#ff4d4d'
                                minValue={0}
                                alignItems='center'
                                onChange={value => handleChange("amount", value)}
                            />
                            </View>
                            <Text style={styles.textStyleamount}>Card information </Text>
                            <View style={styles.centeredView}>
                                <TextInput
                                    placeholder={'Card number'}
                                    style={styles.input1}
                                    placeholderTextColor="#8c8c8c"
                                    returnKeyType="next"
                                    onSubmitEditing={() => nameRef.focus()}
                                    onChangeText={value => handleChange("card_number", value)}
                                    />
                                <TextInput
                                    placeholder={'Cardholder name'}
                                    style={styles.input2}
                                    placeholderTextColor="#8c8c8c"
                                    returnKeyType="next"
                                    ref={nameRef => (this.nameRef = nameRef)}
                                    onSubmitEditing={() => cvcRef.focus()}
                                    onChangeText={value => handleChange("charholder_name", value)}
                                    />
                                <View style={styles.textInputRow}>
                                    <TextInput placeholder="CVC" style={styles.input3} placeholderTextColor="#8c8c8c" returnKeyType="next" ref={cvcRef => (this.cvcRef = cvcRef)} onSubmitEditing={() => mmyyRef.focus()} onChangeText={value => handleChange("cvc", value)}></TextInput>
                                    <TextInput placeholder="MM/YY" style={styles.input4} placeholderTextColor="#8c8c8c" returnKeyType="done" ref={mmyyRef => (this.mmyyRef = mmyyRef)} onChangeText={value => handleChange("exp_date", value)}></TextInput>
                                </View>

                                <View style={styles.buttonbox}>
                                    <Button title='Donate' onPress={handleSubmit} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
                                </View>
                                <Pressable
                                    style={[styles.buttonback, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>

                                    <Text style={styles.textStyleback}>Back to Donate Page</Text>

                                </Pressable>
                            </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Donate</Text>
                </Pressable>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      title:{
        color: "rgba(208,2,27,1)",
        fontSize: 28,
        height: 62,
        textAlign: 'center'
      },
      paragraph: {
        fontSize: 14,
        marginLeft: 15,
        marginRight: 15,
        textAlign:'center',
        marginBottom: 20
      },
      image:{
        width: 250,
        height: 200,
        marginTop: 10,
        marginBottom: 20
      },
      input1: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        borderRadius: 10,
        color: '#000000',
        
      }, 
      input2: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        borderRadius: 10,
        color: '#000000'
      },
      input3: {
        width: 90,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        borderRadius: 10,
        color: '#000000',
        marginLeft: 30,
        marginRight: 20
      },
      input4: {
        width: 90,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(208,2,27,1)',
        marginBottom: 10,
        borderRadius: 10,
        color: '#000000'
      },
      textInputRow: {
        height: 34,
        flexDirection: "row",
        marginLeft: 26,
        marginRight: 56
      },
      buttonbox: { 
        width: 100,
        backgroundColor: 'rgba(208,2,27,1)',
        borderRadius: 10,
        padding: 0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        marginTop: 60,
        alignItems: 'center'
    },
      modalView: {
        margin: 20,
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredView:{
        alignItems: 'center'
      },
      buttonback: {
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        color:'black',
        shadowOffset: {
            width: 0,
            height: 10
          },
        marginTop: 30,
      },
      button: {
        width:100,
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        color:"#fff",
        shadowColor: '#fff',
        shadowOffset: {
            width: 10,
            height: 10
          },
        marginTop: 60
      },
      buttonOpen: {
        backgroundColor: 'rgba(208,2,27,1)',
      },
      buttonClose: {
        backgroundColor: '#e6e6e6',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textStyleback: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textStyleamount:{
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 5,
        marginBottom: 10,
        marginTop: 15
      },
      modalText: {
        textAlign: 'center',
        fontSize: 26,
        marginBottom: 25
      },
});

export default UserDonate;

