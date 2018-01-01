import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TomapsPage } from './tomaps';

@NgModule({
  declarations: [
    TomapsPage,
  ],
  imports: [
    IonicPageModule.forChild(TomapsPage),
  ],
})
export class TomapsPageModule {}
