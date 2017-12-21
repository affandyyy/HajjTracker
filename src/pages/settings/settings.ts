import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  hotel: any;

  languages = ['Tajul Ariffin', 'Haji Rahman', 'Haji Abdul'];
  hotels = [
    'Hotel UiTM',
    'Intekma Resort',
    'Concorde Hotel',
    'Grand Blue Wave',
    'Hotel De Art'
  ];

  user = {
    name: 'Mohd Arief',
    imageUrl: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }


  toggleNotifications() {
    console.log("Toggle clicked")
  }



  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }



  logOut() {
    console.log("Logout clicked")
  }

  goBack() {
    this.navCtrl.pop();
  }



}

