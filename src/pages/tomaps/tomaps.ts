import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

import { LaunchNavigator } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
  selector: 'page-tomaps',
  templateUrl: 'tomaps.html'
})
export class TomapsPage {

  @ViewChild('map') mapElement: ElementRef;

  // Mecca map
  markers: any =
    [
      {
        lat: 21.2891,
        lng: 39.8979,
        desc: "You are here !"
      },
      {
        lat: 21.5091,
        lng: 39.8079,
        desc: `Team Leader`
      },
      {
        lat: 20.5091,
        lng: 39.8079,
        desc: 'Your hotel'
      }]



  map: any;
  marker: any;
  loading: any;

  lat: number = 51.678418;
  lng: number = 7.809007;


  regionals: any = [];
  currentregional: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public storage: Storage,
    private launchNavigator: LaunchNavigator,
    public zone: NgZone,
  ) { }



  ionViewDidLoad() {
  }


  NavMe(address) {
    this.launchNavigator.navigate(address)
      .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
      );

  }

}