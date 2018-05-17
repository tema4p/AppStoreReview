import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AppInfoPage } from '../app-info/app-info';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[];
  public stars: [1, 2, 3, 4, 5];
  public term: string = '';
  public fullImgDelay: boolean = false;
  private minLengthSearch: number = 3;

  constructor(public navCtrl: NavController,
              public http: HttpClient,
              private iap: InAppPurchase) {
    setTimeout(() => {
      this.getItems();
    },10);

    this.checkPurchases();
  }

  public checkPurchases(): void {
    // this.iap
    //   .getProducts(['reviews'])
    //   .then((products) => {
    //     //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
    //   })
    //   .catch((err) => {
    //   });
  }

  public getItems(): void {
    if (this.term.length >= this.minLengthSearch) {
      this.http.get(`https://itunes.apple.com/search?term=${this.term}&entity=software`)
        .subscribe((data: any) => {
          this.items = _.sortBy(data.results, ['trackId']);
        });
    }
    this.hideKeyboard();
    this.checkPurchases();
  }

  public hideKeyboard(): void {
    let activeElement = <HTMLElement>document.activeElement;
    activeElement && activeElement.blur && activeElement.blur();
  }

  public goToApp(item): void {
    this.navCtrl.push(AppInfoPage, {item: item});
  }
}
