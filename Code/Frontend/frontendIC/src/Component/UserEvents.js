import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal, Pressable, Image} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

function UserEvents() {
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardHeights, setCardHeights] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://192.168.43.106:5000/api/allevents');
      setEvents(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image style={styles.image} source={require('../../assets/events.jpg')} />
        {events.map((event, index) => (
          <View key={index}>
            <Card containerStyle={[styles.cardContainer,{ height: cardHeights[index] || 'auto' },]} wrapperStyle={styles.cardWrapper}>
              <View onLayout={e => {
                const { height } = e.nativeEvent.layout;
                setCardHeights(prevState => ({
                  ...prevState,
                  [index]: height,
                }));
              }}>
              <Card.Title style = {styles.title}>{event.title}</Card.Title>
              <Card.Divider style = {styles.divider}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(index)}>
                <Text style={styles.textStyleopen}>View Details</Text>
              </Pressable>
              <Ionicons size={30} color={'rgba(208,2,27,1)'} name="calendar-sharp"/>
              </Card.Divider>
              </View>
            </Card>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible === index}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false);
              }}>
              <View style={styles.modalView}>
              <ScrollView style={styles.scrollView}>
             
                <View>
                <View style={styles.subtitle}>
                  <Text style={styles.textStyle}>{event.description}</Text>
                </View>
                  
                  <Pressable
                    style={[styles.buttonback, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyleback}>Close</Text>
                  </Pressable>
                </View>
                
                </ScrollView>
              </View>
            </Modal>
          </View>
        ))}
      </ScrollView>
    </View>
  );
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#f2f2f2'
  },
  cardContainer: {
    borderRadius: 20,
    elevation: 7,
    width: 350,
    borderColor: 'red',
    backgroundColor: 'white',
    fontSize: 20,
    marginBottom: 30
  },
  cardWrapper: {
    paddingHorizontal: 10,
    color: 'red',
    alignContent: 'left',
    fontSize: 20
  },
  title:{
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  },
  scrollView: {
    marginHorizontal: 0
  },
  textStyle: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14
  },
  button: {
    width:120,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    color:"#fff",
    shadowColor: '#fff',
    shadowOffset: {
        width: 10,
        height: 10
      },
      marginRight: 90
  },
  buttonOpen: {
    backgroundColor: 'rgba(208,2,27,1)'
  },
  textStyleopen: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    marginBottom: 30,
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonback: {
    width:90,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    color:"#fff",
    shadowColor: '#fff',
    shadowOffset: {
        width: 10,
        height: 10
      },
    alignItems:'center',
    marginLeft: 85,
    marginTop: 30
  },
  buttonClose: {
    backgroundColor: 'rgba(208,2,27,1)',
  },
  textStyleback: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width: 380,
    height: 130,
    marginTop:0,
    marginBottom: 20
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
      
});

export default UserEvents;