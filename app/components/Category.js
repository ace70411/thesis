import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          Category
        </Text>
      </View>
    );
  }
}
