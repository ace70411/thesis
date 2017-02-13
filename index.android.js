/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, View, DrawerLayoutAndroid, Text, TouchableOpacity, ScrollView
} from 'react-native';
import Dish from './app/components/Dish';
import Header from './app/components/Header';
import Menu from './app/components/Menu';
import DishOrdered from './app/components/DishOrdered';
import PopupDialog, {DialogButton, DialogTitle} from 'react-native-popup-dialog';
import SelectQuanlity from './app/components/SelectQuanlity';

export default class GuestApp extends Component {
  constructor(props){
    super(props);
    this.state = {modalVisible: false};
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu />}
        ref={(drawer) => {return this.drawer = drawer;}}
      >
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Header title={'Menu'} onClickMenu={()=>this.drawer.openDrawer()}/>
          <ScrollView>
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </ScrollView>
          <View
            style={{
              bottom:0,
              position: 'absolute',
              right: 0,
              left: 0,
              borderTopWidth: 0.3,
              height: 40,
              zIndex: 10,
              backgroundColor: '#ffffff'
            }}>
            <TouchableOpacity>
              <Text
                style={{textAlign: 'center', color: 'gray',fontSize: 20, lineHeight: 32}}
              >
                History
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('GuestApp', () => GuestApp);
