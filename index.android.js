/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Scene, Router, ActionConst} from 'react-native-router-flux';

import App from './app/components/App';
import History from './app/components/History';

export default class GuestApp extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='Category1' component={App} hideNavBar={true} title={'Category 1'} type={ActionConst.REPLACE}/>
          <Scene key='Category2' component={App} hideNavBar={true} title={'Category 2'} type={ActionConst.REPLACE}/>
          <Scene key='Category3' component={App} hideNavBar={true} title={'Category 3'} type={ActionConst.REPLACE}/>
          <Scene key='Category4' component={App} hideNavBar={true} title={'Category 4'} type={ActionConst.REPLACE}/>
          <Scene key='History' component={History} hideNavBar={false} title='History' />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('GuestApp', () => GuestApp);
