import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class DishOrdered extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.dishOrderedContainer}>
        <Card>
          <CardImage>
          <Image
            source={require('../images/lau3.jpg')}
            style={styles.image}
            resizeMethod={'resize'}
          />
          </CardImage>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishOrderedContainer: {
    backgroundColor: '#696969',
    flexDirection: 'row',
    padding:1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    borderRadius: 10,
    height: 120,
    position: 'relative'
  },
  dishControl: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft: 150
  },
  image: {
    resizeMode: 'contain',
    position: 'relative',
    width: 300,
    height: 120
  },
});
