import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';


import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public authData: AuthData) {

  }

  user = {
    name: 'Mohd Arief',
    profileImage: 'https://imgur.com/GKC8IqV.jpg',
    coverImage: 'https://wallpaperscraft.com/image/sky_blue_white_clouds_tenderness_4937_602x339.jpg',
    occupation: 'Shah Alam',
    location: 'Malaysia',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    email: 'cosima@niehaus.com',
    whatsapp: '555 555 555',
  };

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(LoginPage);
    });
}


}
