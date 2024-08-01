// screens/FlightStatusScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const FlightStatusScreen = ({ route }) => {
  const { bookingId } = route.params;
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios.get(`http://your-api-url/api/bookings/${bookingId}`)
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, [bookingId]);

  if (!booking) {
    return (
      <View style={styles.container}>
        <Text>Loading booking details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Booking Details</Text>
      <Text>Flight Number: {booking.flight.flightNumber}</Text>
      <Text>Origin: {booking.flight.origin}</Text>
      <Text>Destination: {booking.flight.destination}</Text>
      <Text>Departure Time: {booking.flight.departureTime}</Text>
      <Text>Arrival Time: {booking.flight.arrivalTime}</Text>
      <Text>Status: {booking.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default FlightStatusScreen;
