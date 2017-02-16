import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

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
        <TouchableOpacity onPress={() => Actions.Category1()}>
          <Category />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.Category2()}>
          <Category />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.Category3()}>
          <Category />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.Category4()}>
          <Category />
        </TouchableOpacity>
      </View>
    );
  }
}
