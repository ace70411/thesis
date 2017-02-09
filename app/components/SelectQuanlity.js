import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import selectQuanlity from '../styles/selectQuanlity';
import {Text, View, TouchableOpacity} from 'react-native';

export default class SelectQuanlity extends Component {
  constructor(props){
    super(props);
    this.state = {quanlity: 0};
  }

  render(){
    return(
      <View style={selectQuanlity.selectContainer}>
        <View>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={()=> this.setState({quanlity: this.state.quanlity -1})}
          >
            <Icon
              name='minus-square-o'
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={selectQuanlity.quanlityDish}>
            {this.state.quanlity}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={()=> this.setState({quanlity: this.state.quanlity+1})}
          >
            <Icon
              name='plus-square-o'
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
