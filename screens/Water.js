import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import TabNavigator from '../navigation/TabNavigator';

export default class Water extends React.Component {
  constructor() {
    super();
    this.state = {
      hundredml: 150,
      twohundredfiftyml: 250,
      result: 0,
    };
  }

  addonehundredml = () => {
    this.setState({ result: this.state.result + this.state.hundredml });
  };
  addtwohundredml = () => {
    this.setState({ result: this.state.result + this.state.twohundredfiftyml });
  };
  resetButton = () => {
    this.setState({ result: 0 });
  };

  render() {
    if (this.state.result >= 2000) {
      alert('You have drunk 2 litres today');
    }
    if (this.state.result >= 1000 && this.state.result <= 1100) {
      alert('You have drunk 1 litre today, halfway there');
    }
    return (
      <View>
        <ImageBackground source={require('../assets/Water.gif')}>
          <TouchableOpacity
            style={[styles.watersado, { justifyContent: 'center' }]}>
            <Text
              style={{
                fontSize: 75,
                fontWeight: 'bold',
                color: '#34e8eb',
              }}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.watersado, { justifyContent: 'center' }]}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#34e8eb',
              }}
              onPress={() => {
                this.addonehundredml();
              }}>
              150ml
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.watersado, { justifyContent: 'center' }]}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#34e8eb',
              }}
              onPress={() => {
                this.addtwohundredml();
              }}>
              250ml
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.watersado,
              { marginLeft: 200, marginTop: -95, alignContent: 'center' },
            ]}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#34e8eb',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 27,
              }}
              onPress={() => {
                this.resetButton();
              }}>
              Reset
            </Text>
          </TouchableOpacity>
          <Text
            style={{ fontWeight: 'bold', color: 'red', marginBottom: -150 }}>
            {' '}
            Total Water Conspumtion Today:{' '}
          </Text>
          <Text
            style={{
              marginLeft: 120,
              marginTop: 170,
              borderWidth: 2,
              borderColor: '#0390fc',
              padding: 10,
              width: 75,
            }}>
            {this.state.result} ml
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  watersado: {
    height: 100,
    borderWidth: 2,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    alignContent: 'center',
  },
});
