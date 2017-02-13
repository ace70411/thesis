import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Category from './Category';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          Menu
        </Text>
        <Category />
        <Category />
        <Category />
        <Category />
      </View>
    );
  }
}
