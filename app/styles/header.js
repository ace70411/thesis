import {StyleSheet} from 'react-native';

const header = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  toolbarContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  toolBar: {
    height: 70,
    width: 70
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#696969',
  },
  cartButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  carButton: {
    flexDirection: 'row',
    right: 10
  },
  cartImageButton: {
    zIndex: -1,
    left: 10
  },
  cartImage: {
    height: 40,
    width: 40,
  },
  numberDish: {
    width: 20,
    height: 20,
    borderRadius: 100/2,
    backgroundColor: 'green',
    right: 10,
    top: 0,
  },
  numberDishText: {
    color: 'white',
    fontFamily: 'tohama',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default header;
