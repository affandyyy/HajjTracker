import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NavController, ModalController } from 'ionic-angular';
import { AuthData } from '../../../providers/auth-data';

import { LoginPage } from '../../login/login';

/**
 * Generated class for the TrackModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-modal',
  templateUrl: 'track-modal.html',
})


export class TrackModalPage {
  url: string;  
  
  constructor(private inAppBrowser: InAppBrowser, public viewCtrl: ViewController, public navCtrl: NavController, public authData: AuthData) { }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  logOut() {
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
