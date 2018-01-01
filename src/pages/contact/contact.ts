import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';


import { LoginPage } from '../login/login';
import { CallNumber } from '@ionic-native/call-number';

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
    coverImage: 'https://i.stack.imgur.com/8L0i4.jpg',
    occupation: 'Shah Alam',
    location: 'Malaysia',
    address: 'No 30, Jalan Kristal 2, 7/76 B, Seksyen 7, 40000, Shah Alam, Selangor',
    phone: '+60 16 217 4515',
    email: 'ariefmata@gmail.com',
    whatsapp: '+60 16 217 4515',
  };

  logOut() {
    this.authData.logoutUser().then(() => {
        this.navCtrl.setRoot(LoginPage);
    });
}

// callThis(){
//   this.callNumber.callNumber("+60162174515", true)
//   .then(() => console.log('Launched dialer!'))
//   .catch(() => console.log('Error launching dialer'));
// }


}
