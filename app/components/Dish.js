import React, {Component} from 'react';
import {View} from 'react-native';
import DishIntro from './DishIntro';
import SelectQuanlity from './SelectQuanlity';
import DishInforButton from './DishInforButton';
import styles from '../styles/dish';

export default class Dish extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.dishContainer}>
        <DishIntro />
        <View style={styles.dishControl}>
          <SelectQuanlity />
          <DishInforButton />
        </View>
      </View>
    );
  }
}
