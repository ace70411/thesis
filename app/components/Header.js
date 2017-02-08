import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import IconSearch from '../utility/IconSearch';
import IconMenu from '../utility/IconMenu';
import IconCart from '../utility/IconCart';
import {header} from '../header/header';
export default class Header extends Component {
  render(){
    return (
      <View style={header.headerContainer}>
        <View style={header.toolbarContainer}>
          <ToolbarAndroid
            logo={require('./app/images/menu.png')}
            style={header.toolBar}
            title='toolbar'
          />
        </View>
        <View style={header.headerTitle}>
          <Text style={header.title}>
            Menu
          </Text>
        </View>
        <View style={header.cartButtonContainer}>
          <View style={header.carButton}>
            <View style={header.cartImageButton}>
              <View style={header.cartImage}>
                <IconCart />
              </View>
            </View>
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
