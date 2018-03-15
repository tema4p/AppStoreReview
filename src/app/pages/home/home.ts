import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {AppInfoPage} from '../app-info/app-info';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[];
  public stars: [1,2,3,4,5];
  public term: string = 'english';
  public fullImgDelay: boolean = false;

  private minLengthSearch: number = 3;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    setTimeout(() => {
      this.getItems();
    },10);
  }

  public getDateFormatted(text: string): string {
    return moment(text).format('L');
  }

  public getItems(): void {
    this.fullImgDelay = false;
    if (this.term.length >= this.minLengthSearch) {
      this.http.get(`https://itunes.apple.com/search?term=${this.term}&entity=software`)
        .subscribe((data: any) => {
          console.log('data.results', data.results);
          this.items = data.results;
          setTimeout(() => {
            this.fullImgDelay = true;
          }, 10)
        });
    }
  }

  public goToApp(item): void {
    console.log('goToApp', item);
    this.navCtrl.push(AppInfoPage, {item: item});
  }
}


// let test = {
//   "ipadScreenshotUrls": [
//     "http://is4.mzstatic.com/image/thumb/Purple118/v4/f9/c6/7d/f9c67ded-e9bb-b852-53b2-751ed25bff36/source/576x768bb.jpg",
//     "http://is1.mzstatic.com/image/thumb/Purple118/v4/e9/68/dd/e968dd08-191e-3d11-3fe3-8ace6b765fd3/source/576x768bb.jpg"
//   ],
//   "appletvScreenshotUrls": [],
//   "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Purple128/v4/87/ed/c7/87edc736-caf5-e5c6-bc92-4e238714a1cf/source/60x60bb.jpg",
//   "artworkUrl512": "http://is2.mzstatic.com/image/thumb/Purple128/v4/87/ed/c7/87edc736-caf5-e5c6-bc92-4e238714a1cf/source/512x512bb.jpg",
//   "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Purple128/v4/87/ed/c7/87edc736-caf5-e5c6-bc92-4e238714a1cf/source/100x100bb.jpg",
//   "artistViewUrl": "https://itunes.apple.com/us/developer/facebook-inc/id284882218?uo=4",
//   "supportedDevices": [
//     "iPad2Wifi-iPad2Wifi",
//     "iPad23G-iPad23G",
//     "iPhone4S-iPhone4S",
//     "iPadThirdGen-iPadThirdGen",
//     "iPadThirdGen4G-iPadThirdGen4G",
//     "iPhone5-iPhone5",
//     "iPodTouchFifthGen-iPodTouchFifthGen",
//     "iPadFourthGen-iPadFourthGen",
//     "iPadFourthGen4G-iPadFourthGen4G",
//     "iPadMini-iPadMini",
//     "iPadMini4G-iPadMini4G",
//     "iPhone5c-iPhone5c",
//     "iPhone5s-iPhone5s",
//     "iPadAir-iPadAir",
//     "iPadAirCellular-iPadAirCellular",
//     "iPadMiniRetina-iPadMiniRetina",
//     "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
//     "iPhone6-iPhone6",
//     "iPhone6Plus-iPhone6Plus",
//     "iPadAir2-iPadAir2",
//     "iPadAir2Cellular-iPadAir2Cellular",
//     "iPadMini3-iPadMini3",
//     "iPadMini3Cellular-iPadMini3Cellular",
//     "iPodTouchSixthGen-iPodTouchSixthGen",
//     "iPhone6s-iPhone6s",
//     "iPhone6sPlus-iPhone6sPlus",
//     "iPadMini4-iPadMini4",
//     "iPadMini4Cellular-iPadMini4Cellular",
//     "iPadPro-iPadPro",
//     "iPadProCellular-iPadProCellular",
//     "iPadPro97-iPadPro97",
//     "iPadPro97Cellular-iPadPro97Cellular",
//     "iPhoneSE-iPhoneSE",
//     "iPhone7-iPhone7",
//     "iPhone7Plus-iPhone7Plus",
//     "iPad611-iPad611",
//     "iPad612-iPad612",
//     "iPad71-iPad71",
//     "iPad72-iPad72",
//     "iPad73-iPad73",
//     "iPad74-iPad74",
//     "iPhone8-iPhone8",
//     "iPhone8Plus-iPhone8Plus",
//     "iPhoneX-iPhoneX"
//   ],
//   "isGameCenterEnabled": false,
//   "kind": "software",
//   "features": [
//     "iosUniversal"
//   ],
//   "screenshotUrls": [
//     "http://is2.mzstatic.com/image/thumb/Purple118/v4/3a/16/6a/3a166af5-3d53-dc6a-569f-75fc81ee1d56/source/392x696bb.jpg",
//     "http://is3.mzstatic.com/image/thumb/Purple118/v4/96/e8/36/96e83687-38d9-363f-90a7-45ec356ba25e/source/392x696bb.jpg",
//     "http://is4.mzstatic.com/image/thumb/Purple118/v4/a4/77/09/a4770932-24a7-5650-e07c-fbda886fa298/source/392x696bb.jpg",
//     "http://is2.mzstatic.com/image/thumb/Purple128/v4/30/8c/7e/308c7e18-5740-35cf-77c0-70e510d7d08b/source/392x696bb.jpg",
//     "http://is4.mzstatic.com/image/thumb/Purple128/v4/38/a0/7d/38a07df3-23a1-6d70-c1d9-4e98bb632b5d/source/392x696bb.jpg"
//   ],
//   "advisories": [
//     "Infrequent/Mild Simulated Gambling",
//     "Infrequent/Mild Cartoon or Fantasy Violence"
//   ],
//   "averageUserRatingForCurrentVersion": 4.5,
//   "trackCensoredName": "Messenger",
//   "languageCodesISO2A": [
//     "HR",
//     "CS",
//     "DA",
//     "NL",
//     "EN",
//     "FI",
//     "FR",
//     "DE",
//     "EL",
//     "HU",
//     "ID",
//     "IT",
//     "JA",
//     "KO",
//     "MS",
//     "NB",
//     "PL",
//     "PT",
//     "RU",
//     "ZH",
//     "SK",
//     "ES",
//     "SV",
//     "TH",
//     "ZH",
//     "TR",
//     "VI"
//   ],
//   "fileSizeBytes": "227027968",
//   "sellerUrl": "http://www.facebook.com/mobile/messenger",
//   "contentAdvisoryRating": "12+",
//   "userRatingCountForCurrentVersion": 21162,
//   "trackViewUrl": "https://itunes.apple.com/us/app/messenger/id454638411?mt=8&uo=4",
//   "trackContentRating": "12+",
//   "currentVersionReleaseDate": "2018-03-05T18:03:28Z",
//   "currency": "USD",
//   "wrapperType": "software",
//   "version": "154.0",
//   "artistId": 284882218,
//   "artistName": "Facebook, Inc.",
//   "genres": [
//     "Social Networking",
//     "Productivity"
//   ],
//   "price": 0,
//   "description": "Instantly connect with the people in your life. Messenger is free, fast, and secure. \n\n- Reach anyone. You can use names or phone numbers to find friends. \n- Use everywhere. Messenger works across all mobile and desktop devices. You can even connect with people internationally!   \n- Connect however you want. Send a text message, share a photo, or start a video chat — all in Messenger. \n- Communicate better with groups. Catch up in real time with high quality group video chat or customize your messaging experience with colors, nicknames, and group photos. \n- Call and video chat your friends 1:1 or in groups. It's free over Wi-Fi (otherwise standard data charges apply), so talk as long as you want, even with people in other countries. \n- Express yourself. Send emojis, stickers, and GIFs to conversations or add new masks and effects to your video chats. \n- Capture photos and videos with fun art and effects. You can save these to camera roll, send to conversations, or post to your Day, a place where people can see what you're up to.  \n- Play games and compete with your friends. You can compare scores and see how you rank against other people. \n- Chat with businesses. You can make reservations, check on orders, and get real-time customer service.",
//   "bundleId": "com.facebook.Messenger",
//   "trackId": 454638411,
//   "trackName": "Messenger",
//   "minimumOsVersion": "8.0",
//   "primaryGenreName": "Social Networking",
//   "isVppDeviceBasedLicensingEnabled": true,
//   "releaseDate": "2011-08-09T19:49:28Z",
//   "releaseNotes": "We update the app regularly so we can make it better for you. Get the latest version for all of the available Messenger features. Thanks for using Messenger!",
//   "primaryGenreId": 6005,
//   "sellerName": "Facebook, Inc.",
//   "genreIds": [
//     "6005",
//     "6007"
//   ],
//   "formattedPrice": "Free",
//   "averageUserRating": 3.5,
//   "userRatingCount": 604474
// }
