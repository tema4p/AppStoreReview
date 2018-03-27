import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavoritesPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
