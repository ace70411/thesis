import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import IconClose from '../utility/IconClose';

export default class OrderDetailDialog extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.cardContainer}>

        <View style={styles.header}>
          <View style={styles.control}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => this.props.onClickClose()}>
                <IconClose />
              </TouchableOpacity>
            </View>
            <View >
              <Button
                title={'Order'}
                onPress={()=>alert('ok')}
              />
            </View>
          </View>
          <View style={styles.name}>
            <Text
              numberOfLines= {2}
              ellipsizeMode={'tail'}
              style={styles.nameText}
            >
              Order Detail
            </Text>
          </View>

        </View>
        <View style={styles.body}>
          <View style={styles.discription}>
            <Text>
              
            </Text>
            <Text>

            </Text>
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
    height: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#f0f8ff',
  },
  control: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  name: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 20
  },
  icon: {
    left: 3,
    top: 2,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#696969',
    height: 540,
    width: 350,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  discription: {
    alignSelf: 'flex-start',
    top: 5,
    left: 10
  },
});
