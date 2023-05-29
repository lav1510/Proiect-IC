import * as React from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text, Modal, Pressable, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

function UserVolunteer({navigation}){
    const tShirt = ["M", "L", "XL"]
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Fii Voluntar! </Text>
            <Text style={styles.textStylequestion}>De ce vrei să te alături echipei noastre? </Text>
            <View style={styles.centeredView}>
                                <TextInput
                                    placeholder={'Mesaj...'}
                                    style={styles.input1}
                                    placeholderTextColor="#8c8c8c"
                                    />
            </View>
            <Text style={styles.textStyletShirt}>Alege mărimea tricoului!</Text>
            <View style={styles.centeredView}>
                <SelectDropdown
                    data={tShirt}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            
                <View style={styles.buttonbox}>
                    <Button title='Be Volunteer' onPress={() => Alert.alert('Done')} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
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