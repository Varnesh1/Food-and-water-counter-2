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
import Recipes from '../screens/recipes';
import {Button, Card, Icon} from 'react-native-elements'
import Food from '../screens/Food'




console.log(Recipes[0].ingredients[0].name[0]);
export default class AssetFoodRecipe extends React.Component {
  render() {
    return (
 <View style={styles.storyTitleText}>
  <Text>
  
  
  </Text>





  
    </View>
    );
  }
}

const styles = StyleSheet.create({
  foodsado: {
    height: 100,
    borderWidth: 2,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#2f345d',
  },
  storyImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
  },
  storyTitleText: {
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    fontSize: 30,
  },
  storyAuthorText: {
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },

});
