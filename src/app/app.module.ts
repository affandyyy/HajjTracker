import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ResetPassword }from '../pages/reset-password/reset-password';
import { Signup } from '../pages/signup/signup';
import { GuidePage } from '../pages/guide/guide';
import { SettingsPage } from '../pages/settings/settings';
import { TrackPage } from '../pages/track/track';
import { TrackModalPage } from '../pages/about/track-modal/track-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AuthData } from '../providers/auth-data';
import { OfferData } from '../providers/offer-data';
import { Utility } from '../providers/utility';

// import { HttpClientModule } from '@angular/common/http'; 
// import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResetPassword,
    Signup,
    GuidePage,
    SettingsPage,
    TrackPage,
    TrackModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-gm27V2CKE3jifKC4YkHEQfL_MCVjn6E'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ResetPassword,
    Signup,
    GuidePage,
    SettingsPage,
    TrackPage,
    TrackModalPage
  ],
  providers: [
    AuthData,
    StatusBar,
    SplashScreen,
    OfferData,
    Utility,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    LaunchNavigator,

  ]
})
export class AppModule {}
