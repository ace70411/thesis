import React, {Component} from 'react';
import {
  View, Text
} from 'react-native';
import IconSearch from '../utility/IconSearch';
import IconMenu from '../utility/IconMenu';
import IconCart from '../utility/IconCart';
import header from '../styles/header';

export default class Header extends Component {
  render(){
    return (
      <View style={header.headerContainer}>
        <View style={header.toolbarContainer}>
          <IconMenu />
        </View>
        <View style={header.headerTitle}>
          <Text style={header.title}>
            Menu
          </Text>
        </View>
        <View style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
        >
        <View style={header.searchIcon}>
          <IconSearch />
        </View>
        <View style={header.cartButtonContainer}>
            <IconCart />
          <View style={header.numberDish}>
            <Text style={header.numberDishText}>
              5
            </Text>
          </View>
        </View>
        </View>
      </View>
    );
  }
}
