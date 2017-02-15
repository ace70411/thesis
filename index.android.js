/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
// import {Scene, Router} from 'react-native-router-flux';

import App from './app/components/App';

export default class GuestApp extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <App title={'Menu'} />
    );
  }
}

AppRegistry.registerComponent('GuestApp', () => GuestApp);
