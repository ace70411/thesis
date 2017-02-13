import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'darkgreen',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    borderRadius: 10,
    height: 90,
  },
  dishControl: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginLeft: 140
  }
});

export default styles;
