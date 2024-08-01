// screens/FlightSearchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const FlightSearchScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    axios.get(`http://your-api-url/api/flights?origin=${origin}&destination=${destination}`)
      .then(response => {
        setFlights(response.data);
      })
      .catch(error => {
        console.error('Search error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Search Flights</Text>
      <TextInput
        style={styles.input}
        placeholder="Origin"
        value={origin}
        onChangeText={setOrigin}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.flightItem}>
            <Text>{item.flightNumber} - {item.origin} to {item.destination}</Text>
            <Button
              title="Book"
              onPress={() => navigation.navigate('Booking', { flightId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  flightItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default FlightSearchScreen;
