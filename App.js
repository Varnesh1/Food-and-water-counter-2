import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomePage from './screens/HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Water from './screens/Water';
import Food from './screens/Food'
const Stack = createStackNavigator();
import Imageer from './screens/imageer'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}></Stack.Screen>
           <Stack.Screen
          name="Imageer"
          component={Imageer}></Stack.Screen>
          
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
