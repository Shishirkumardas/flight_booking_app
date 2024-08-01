// screens/BookingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const BookingScreen = ({ route, navigation }) => {
  const { flightId } = route.params;
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    axios.get(`http://your-api-url/api/flights/${flightId}`)
      .then(response => {
        setFlight(response.data);
      })
      .catch(error => {
        console.error('Error fetching flight details:', error);
      });
  }, [flightId]);

  const handleBooking = () => {
    axios.post('http://your-api-url/api/bookings', { flightId, userId: 1 }) // Assume userId is 1 for simplicity
      .then(response => {
        navigation.navigate('FlightStatus', { bookingId: response.data.id });
      })
      .catch(error => {
        console.error('Booking error:', error);
      });
  };

  if (!flight) {
    return (
      <View style={styles.container}>
        <Text>Loading flight details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Flight Details</Text>
      <Text>Flight Number: {flight.flightNumber}</Text>
      <Text>Origin: {flight.origin}</Text>
      <Text>Destination: {flight.destination}</Text>
      <Text>Departure Time: {flight.departureTime}</Text>
      <Text>Arrival Time: {flight.arrivalTime}</Text>
      <Button title="Book Flight" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default BookingScreen;
