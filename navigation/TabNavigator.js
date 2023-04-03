import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Food from "../screens/Food";
import HomePage from "../screens/HomePage";
import Water from '../screens/Water'
import Imageer from '../screens/imageer'
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Food') {
                        iconName = focused
                            ? 'pizza'
                            : 'pizza-outline';
                    } else if (route.name === 'Water') {
                        iconName = focused ? 'water-outline' : "water-outline";
                    }
                   return <Ionicons name={iconName} size={size} color={color} />;
               },
            })
            }
            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'gray',

            }}
        >
            <Tab.Screen name="Food" component={Food} />
    
      
            <Tab.Screen name='Water' component={Water}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator