import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class DishOrdered extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.dishOrderedContainer}>
        <Image
          source={require('../images/lau1.jpg')}
          style={styles.image}
          resizeMethod={'scale'}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishOrderedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    marginTop: 100,
    borderRadius: 10,
    height: 150,
  },
  dishControl: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft: 150
  },
  image: {

  },
});
