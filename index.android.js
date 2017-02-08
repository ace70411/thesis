/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './app/components/Header';

export default class GuestApp extends Component {
  render() {
    return (
      <Header />
    );
  }
}

const styles = StyleSheet.create({
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
});

AppRegistry.registerComponent('GuestApp', () => GuestApp);
