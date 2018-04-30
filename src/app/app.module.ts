import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FavoritesPage } from './pages/favorites/favorites';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';
import { AppInfoPage } from './pages/app-info/app-info';
import { TabsPage } from './pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { ReviewService } from './services/reviewService';
import { FavoritesService } from './services/favoritesService';
import { Stars } from './components/stars/stars.component';
import { AppCard } from './components/appCard/appCard.component';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    ContactPage,
    HomePage,
    Stars,
    AppCard,
    AppInfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    ContactPage,
    HomePage,
    AppInfoPage,
    TabsPage
  ],
  providers: [
    InAppPurchase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReviewService,
    FavoritesService
  ]
})
export class AppModule {}
