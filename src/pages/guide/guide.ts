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
      title: 'Haji Ifrad',
      description: 'Ifrad maknanya " berasingan" jadi haji ifrad itu ialah mengerjakan haji dan umrah secara berasingan, iaitu dikerjakan haji dahulu hingga selesai dan kemudian baharulah dikerjakan umrah dalam tahun itu atau dikerjakan umrah sebelum menjelang bulan-bulan haji setelah itu barulah dikerjakan haji.'
    },
    {
      imageUrl: 'http://cdn.metrotvnews.com/dynamic/content/2017/06/24/720764/UR2kcueLh7.jpg?w=650',
      title: 'Haji Tamattu',
      description: 'Tamattu ertinya bersenang-senang, jadi Haji Tamattu itu ialah mengerjakan umrah dahulu dalam bulan-bulan haji, setelah selesai mengerjakan umrah lalu bersenang-senang dengan sebab telah tidak terikat lagi dengan pantang larang ihram. Kemudian setelah sampai waktu haji berihramlah untuk mengerjakan haji pula. Haji jenis ini dikenakan DAM mengikut syarat-syaratnya.'
    },
    {
      imageUrl: 'https://i2.wp.com/4.bp.blogspot.com/-AnkWcLcrFT8/VU2gblxn-II/AAAAAAAAA9I/VKXR33ifxIc/s1600/Makkah%2BLive.jpg',
      title: 'Haji Qiran',
      description: 'Qiran ertinya bersama-sama, jadi Haji Qiran itu ialah dikerjakan kedua-dia haji dan umrah dengan serentak, iaitu dengan satu tawaf, satu saie dan satu bergunting, kerana kerja-kerja umrah itu dimasukkan dalam kerja-kerja haji. Haji cara ini juga wajib melaksanakan DAM.'
    },];



  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

}
