// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import FlightSearchScreen from './screens/FlightSearchScreen';
import BookingScreen from './screens/BookingScreen';
import FlightStatusScreen from './screens/FlightStatusScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FlightSearch" component={FlightSearchScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="FlightStatus" component={FlightStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
