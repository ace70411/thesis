import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconClose from '../utility/IconClose';
import SelectQuanlity from './SelectQuanlity';

export default class DishDetailDialog extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <View style={styles.price}>
            <Text
              style={styles.priceText}
            >
              1.050.000
            </Text>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => this.props.onClickClose()}>
                <IconClose />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.name}>
            <Text
              numberOfLines= {2}
              ellipsizeMode={'tail'}
              style={styles.nameText}
            >
              Lau hai San
            </Text>
          </View>

        </View>
        <View style={styles.body}>
          <View style={styles.discription}>
            <Text>
              Nguyen lieu
            </Text>
            <Text>
              asdfasdf
              asdfasdf
              asdfsasf
            </Text>
          </View>
          <View style={styles.selectQuanlity}>
            <SelectQuanlity />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 70,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f0f8ff',
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    top: 2,
    left: 3
  },
  name: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    left: 20,
    right: 20,
  },
  nameText: {
    fontSize: 20
  },
  icon: {

  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#696969',
    height: 230,
    width: 350,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  discription: {
    alignSelf: 'flex-start',
    top: 5,
    left: 10
  },
  selectQuanlity: {
    left: 0,
    right: 0,
    bottom: 10,
    alignSelf: 'center'
  }
});
