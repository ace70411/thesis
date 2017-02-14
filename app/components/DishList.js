import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Dish from './Dish';

export default class DishList extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={{marginBottom: 95, top: 5, zIndex: -1}}>
        <ScrollView>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
          <Dish onClickInfor={this.props.onClickInfor}/>
        </ScrollView>
      </View>
    );
  }
}
