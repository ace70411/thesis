import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
  },
  toolbarContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15
  },
  headerTitle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#696969',
  },
  searchIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  cartButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numberDish: {
    width: 20,
    height: 20,
    borderRadius: 100/2,
    backgroundColor: 'green',
    bottom: 10,
    right: 10
  },
  numberDishText: {
    color: 'white',
    fontFamily: 'tohama',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
