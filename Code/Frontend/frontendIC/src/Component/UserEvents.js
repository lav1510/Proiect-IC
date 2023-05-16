//This is an example of Card View// 

import React from 'react';
//import react in our code. 

import { Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

import { Card } from 'react-native-elements';
//import Card

function UserEvents(){
  
    return (
      <View style={styles.container}>
        <Card title="Local Modules" elevation={7}>
        {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            This is a card to display events
            
          </Text>
        </Card>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default UserEvents;