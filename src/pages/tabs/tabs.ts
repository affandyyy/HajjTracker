import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GuidePage } from '../guide/guide';

import { AuthData } from '../../providers/auth-data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = GuidePage;
  tab4Root = ContactPage;

  constructor(public authData: AuthData) {}

  }

