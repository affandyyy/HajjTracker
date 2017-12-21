import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackModalPage } from './track-modal';

@NgModule({
  declarations: [
    TrackModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackModalPage),
  ],
})
export class TrackModalPageModule {}
