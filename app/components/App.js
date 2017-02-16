import React, {Component} from 'react';
import {DrawerLayoutAndroid, View, TouchableOpacity, Text} from 'react-native';
import PopupDialog, {ScaleAnimation} from 'react-native-popup-dialog';
import {Actions} from 'react-native-router-flux';

import Header from './Header';
import DishList from './DishList';
import Menu from './Menu';
import DishDetailDialog from './DishDetailDialog';
import OrderDetailDialog from './OrderDetailDialog';


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
              backgroundColor: '#ffffff'
            }}
          >
            <TouchableOpacity onPress={() => Actions.History()}>
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
          width={350}
        >
          <DishDetailDialog onClickClose={() => this.dishDetailDialog.closeDialog()}/>
        </PopupDialog>
        <PopupDialog
          ref={(popupDialog) => this.orderDialog = popupDialog}
          dialogAnimation={new ScaleAnimation()}
          width={350}
          height={600}
        >
          <OrderDetailDialog onClickClose={() => this.orderDialog.closeDialog()}/>
        </PopupDialog>
      </DrawerLayoutAndroid>
    );
  }
}
