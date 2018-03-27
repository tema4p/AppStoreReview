import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavoritesService {

  public favorites: number[] = [];

  constructor(public http: HttpClient) {
    this.loadFavorites();
  }

  loadFavorites(): void {
    if (localStorage['favorites']) {
      this.favorites = JSON.parse(localStorage['favorites']);
    }
  }

  saveFavorites(): void {
    localStorage['favorites'] = JSON.stringify(this.favorites);
  }

  isFavorite(item: any): boolean {
    return this.favorites.indexOf(item.trackId) >= 0;
  }

  add(item: any): void {
    this.favorites.push(item.trackId);
    this.saveFavorites();
  }

  remove(item: any): void {
    _.remove(this.favorites, (id: number) => id === item.trackId);
    this.saveFavorites();
  }

  getFavoritesItems(): any[] {
    let items: any[] = [];
    _.each(this.favorites, (fav: any) => {
      this.http.get(`https://itunes.apple.com/search?term=${fav}&entity=software`)
        .subscribe((data: any) => {
          items.push(data.results[0]);
        });
    });
    return items;
  }
}