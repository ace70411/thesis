import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DishInforButton extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.infor}>
        <TouchableOpacity onPress={this.props.onClickInfor}>
          <Icon
            name='information-outline'
            size={20}
            color='darkorange'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infor:{
    width: 20,
    alignSelf: 'flex-start'
  }
});
