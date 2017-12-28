import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';



/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html',
})


export class GuidePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController) {
  }

  infos = [
    {
      imageUrl: 'https://i1.wp.com/kesehatanhaji.com/wp-content/uploads/2016/04/haji2.jpg?resize=678%2C381',
      title: 'HAJI IFRAD',
     },
    {
      imageUrl: 'http://cdn.metrotvnews.com/dynamic/content/2017/06/24/720764/UR2kcueLh7.jpg?w=650',
      title: 'HAJI TAMATTU',
     },
    {
      imageUrl: 'https://i2.wp.com/4.bp.blogspot.com/-AnkWcLcrFT8/VU2gblxn-II/AAAAAAAAA9I/VKXR33ifxIc/s1600/Makkah%2BLive.jpg',
      title: 'HAJI QIRAN',
     },];



  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

}
