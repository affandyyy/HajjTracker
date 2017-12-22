import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';
import { SettingsPage } from '../settings/settings';

import { LaunchNavigator } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(private launchNavigator: LaunchNavigator, public navCtrl: NavController, public authData: AuthData, public modal: ModalController) {

  }




  logOut() {
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  NavMe(address) {
    this.launchNavigator.navigate(address)
      .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
      );

  }


  popOut(){
    const myModal = this.modal.create(SettingsPage, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    myModal.onDidDismiss(data => {
      console.log('modal.onDidDismiss');
    });
    
    myModal.present();
    }
  }



