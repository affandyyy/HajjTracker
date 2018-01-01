import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';
import { SettingsPage } from '../settings/settings';

import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  testRadioOpen = false;
  testRadioResult: any;


  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private launchNavigator: LaunchNavigator, public navCtrl: NavController, public authData: AuthData, public modal: ModalController) {

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


  popOut() {
    const myModal = this.modal.create(SettingsPage, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    myModal.onDidDismiss(data => {
      console.log('modal.onDidDismiss');
    });

    myModal.present();
  }

  goAlert() {
    const alert = this.alertCtrl.create();
    alert.setTitle('Your Condition');

    alert.addInput({
      type: 'radio',
      label: 'NORMAL',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'LOST',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'NEED HELP',
      value: 'red'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
  }
}






