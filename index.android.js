/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, View
} from 'react-native';
import Dish from './app/components/Dish';
import Header from './app/components/Header';

export default class GuestApp extends Component {
  render() {
    return (
      <View>
        <Header />
        <Dish />
      </View>
    );
  }
}

AppRegistry.registerComponent('GuestApp', () => GuestApp);
