import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DishIntro from './DishIntro';

export default class DishOrdered extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.dishOrderedContainer}>
          <DishIntro />
          <View style={styles.dishControl}>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center',

            }}>
              <Text style={{
                color: 'lavender',
                fontSize: 20
              }}>
                4
              </Text>
              <Text style={{
                color: 'indianred',
                fontSize: 15
              }}>
                200.000
              </Text>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishOrderedContainer: {
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'darkgreen',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    borderRadius: 10,
    height: 90,
  },
  dishControl: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginLeft: 150
  }
});
