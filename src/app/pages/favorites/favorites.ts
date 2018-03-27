import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritesService } from '../../services/favoritesService';
import { AppInfoPage } from '../app-info/app-info';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  public items: any[];

  constructor(public navCtrl: NavController,
              public favoritesService: FavoritesService) {

    if (favoritesService.favorites.length === 0) {
      this.navCtrl.parent.select(1);
    } else {
      this.items = favoritesService.getFavoritesItems();
    }
  }

  ionViewDidEnter() {
    this.items = this.favoritesService.getFavoritesItems();
  }

  public goToApp(item): void {
    this.navCtrl.push(AppInfoPage, {item: item});
  }
}
