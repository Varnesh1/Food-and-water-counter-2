import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TabNavigator from '../navigation/TabNavigator';
import Recipes from './recipes';
import { Button, Card, Icon } from 'react-native-elements';
import AssestExample from '../components/AssetExample';

console.log(Recipes[0].ingredients[0].name[0]);
export default class Food extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Card>
          <Card.Title>Crockpot</Card.Title>
          <Card.Divider />
          <Card.Image source={require('../assets/crockpot.png')} />
          <Text style={{ marginBottom: 10 }}>
            <Card.Title>Calories: 594</Card.Title>
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Click to view full recipe"
            onPress={() => {
              alert(
                'Ingredients: 1 onion, chopped, 2 celery sticks, finely chopped, 2 tbsp rapeseed oil, 3 carrots, halved and cut into chunks, 2 bay leaves, ½ pack thyme, 2 tbsp tomato purée, 2 tbsp Worcestershire sauce, 2 beef stock cubes or stock pots, 900g beef for braising such as skirt, buy a whole piece and cut it yourself for bigger chunks or buy ready-diced, 2 tsp cornflour (optional), ½ small bunch parsley, chopped, Method: STEP 1: Fry the onion and celery in 1 tbsp oil over a low heat until they start to soften – about 5 mins. Add the carrots, bay and thyme, fry for 2 mins, stir in the purée and Worcestershire sauce, add 600ml boiling water, stir and tip everything into a slow cooker. Crumble over the stock cubes or add the stock pots and stir, then season with pepper (don’t add salt as the stock may be salty). STEP 2: Clean out the frying pan and fry the beef in the remaining oil in batches until it is well browned, then tip each batch into the slow cooker. Cook on low for 8-10 hrs, or on high for 4 hrs. STEP 3: If you want to thicken the gravy, mix the cornflour with a splash of cold water to make a paste, then stir in 2 tbsp of the liquid from the slow cooker. Tip back into the slow cooker, stir and cook for a further 30 mins on high. Stir in the parsley and season again to taste. Serve with mash, if you like. Leave to cool before freezing.'
              );
            }}
          />
        </Card>
        }
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
