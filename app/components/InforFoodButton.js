import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class InforFoodButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.infor}>
        <TouchableOpacity>
          <Icon
            name='information-outline'
            size={20}
            color='#696969'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infor:{
    width: 20
  }
});
