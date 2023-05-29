import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import axios from 'axios';

function UserEvents() {
  const [events, setEvents] = useState([]);

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
      {events.map((event, index) => (
        <Card key={index} containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
          <Card.Title>{event.title}</Card.Title>
          <Card.Divider />
          <ListItem>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>{event.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: 'white'
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 7,
    height: 250,
    width: 350,
    borderColor: 'red'
  },
  cardWrapper: {
    paddingHorizontal: 10,
    color: 'red'
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
  },
});

export default UserEvents;