import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import TabNavigator from '../navigation/TabNavigator';

export default class HomePage extends React.Component {
render() {
    return (
     <View>
        <ImageBackground
         source={require('../assets/foodimage.jpg')}
          style={{ marginTop: 10, height: 500 }}>
          <Text style={{ fontSize: 40 }}>Homepage</Text>
          <Text style={{ fontsize: 30, fontWeight: 'bold' }}>
            This is the homepage, click on the Food or Water button to go to the
            next screen.
          </Text>
      
          <TouchableOpacity
            style={{
              borderWidth: 5,
              borderRadius: 30,
              borderColor: 'blue',
              width: 100,
              padding: 1,
              marginBottom: 20,
            }}
            onPress={() => {
              this.props.navigation.navigate('TabNavigator');
            }}>
            <Text
              style={{
                fontsize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'blue',
              }}>
              Water
            </Text>
          </TouchableOpacity>
          
        <TouchableOpacity
            style={{
              borderWidth: 5,
              borderRadius: 30,
              borderColor: 'green',
              width: 100,
              padding: 1,
              marginBottom: 20,
            }}
            onPress={() => {
              this.props.navigation.navigate('TabNavigator');
            }}>
            <Text
              style={{
                fontsize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'green',
              }}>
              Food
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}