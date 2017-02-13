import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class DishIntro extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.dishIntroContainer}>
        <View style={styles.dishImage}>
          <Image
            source={require('../images/lau.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.dishText}>
          <View>
            <Text
              numberOfLines= {2}
              ellipsizeMode={'tail'}
              style={styles.nameText}
            >
              Lau hai san asdf asdf asdf sfd asdf asdf asdf asf asdf asdf sf sadf asdf asdf asdf a adsf asdf asdf asd asd asd asd
            </Text>
          </View>
          <View>
            <Text
              style={styles.priceText}
            >
              Price: 50.000
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dishIntroContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    padding: 5,

  },
  dishImage: {

  },
  image: {
    width: 120,
    height: 80
  },
  dishText: {
    alignSelf: 'auto',
  },
  nameText: {
    color: 'lavender',
    fontSize: 20
  },
  priceText: {
    color: 'indianred',
    fontSize: 15
  }
});
