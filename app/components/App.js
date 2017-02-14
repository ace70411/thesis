import React, {Component} from 'react';
import {DrawerLayoutAndroid, View, TouchableOpacity, Text} from 'react-native';
import PopupDialog, {ScaleAnimation} from 'react-native-popup-dialog';

import Header from './Header';
import DishList from './DishList';
import Menu from './Menu';


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu />}
        ref={(drawer) => this.drawer = drawer}
      >
        <View style={{flex: 1, flexDirection: 'column'}}>

          <Header title={this.props.title} onClickMenu={()=>this.drawer.openDrawer()} onClickCart={() => this.orderDialog.openDialog()}/>
          <DishList onClickInfor={() => this.dishDetailDialog.openDialog()} />
          <View
            style={{
              bottom:0,
              position: 'absolute',
              right: 0,
              left: 0,
              borderTopWidth: 0.3,
              height: 40,
              zIndex: 10,
              backgroundColor: '#ffffff'
            }}
          >
            <TouchableOpacity>
              <Text
                style={{textAlign: 'center', color: 'gray',fontSize: 20, lineHeight: 32}}
              >
                History
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <PopupDialog
          ref={(popupDialog) => this.dishDetailDialog = popupDialog}
          dialogAnimation={new ScaleAnimation()}
        >
          <Text>Dish</Text>
        </PopupDialog>
        <PopupDialog
          ref={(popupDialog) => this.orderDialog = popupDialog}
          dialogAnimation={new ScaleAnimation()}
        >
          <Text>Order</Text>
        </PopupDialog>
      </DrawerLayoutAndroid>
    );
  }
}
