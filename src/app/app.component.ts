import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//All pages
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import {TrackPage} from '../pages/track/track';

//Firebase
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = TrackPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCNiuvcplboqtIsJ6UvtchBsaZxx8vFY1o",
      authDomain: "hajj-tracker-1512908476252-b532f.firebaseapp.com",
      databaseURL: "https://hajj-tracker-1512908476252-b532f.firebaseio.com",
      projectId: "hajj-tracker-1512908476252",
      storageBucket: "hajj-tracker-1512908476252.appspot.com",
      messagingSenderId: "76321053488"
  };
  
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {

      if (!user) {
          console.log("not login");
          this.rootPage = LoginPage;


      } else {
          console.log("login");
          this.rootPage = TabsPage;

      }

  });





    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
