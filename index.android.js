/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, View
} from 'react-native';
import InforFoodButton from './app/components/InforFoodButton';
import Header from './app/components/Header';
import SelectQuanlity from './app/components/SelectQuanlity';

export default class GuestApp extends Component {
  render() {
    return (
      <View>
        <Header />
        <SelectQuanlity />
        <InforFoodButton />
      </View>
    );
  }
}

AppRegistry.registerComponent('GuestApp', () => GuestApp);
