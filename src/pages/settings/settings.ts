import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


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

  languages = ['Haji Ramlan', 'Haji Abdul', 'Haji Thabrani', 'Haji Mohd Yahya'];
  hotels = [
    'Hotel UiTM',
    'Intekma Resort',
    'Concorde Hotel',
    'Grand Blue Wave',
    'Hotel De Art'
  ];

  user = {
    name: 'Mohd Arief',
    imageUrl: 'https://imgur.com/GKC8IqV.jpg'
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
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

  ionViewDidLoad(){
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Searching nearby hotel...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }



}

