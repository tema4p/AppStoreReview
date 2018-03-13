import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from '../../services/reviewService';
/**
 * Generated class for the AppInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-info',
  templateUrl: 'app-info.html',
})
export class AppInfoPage {
  public item: any;
  public items: any = [];

  private allReviews: any = [];
  private perPage: number = 20;
  private currentPage: number = 1;

  constructor(public navParams: NavParams,
              public http: HttpClient,
              public reviewService: ReviewService) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    this.reviewService
      .getAll(this.item.trackId)
      .subscribe(items => {
        this.allReviews = items;
        this.items = items.slice(0, this.perPage);
    });
    console.log('ionViewDidLoad AppInfoPage');
  }

  doInfinite(infiniteScroll): void {
    this.currentPage++;
    this.items = [
      ...this.items,
      ...this.allReviews.slice(this.items.length, this.perPage * this.currentPage)
    ];
    infiniteScroll.complete();
  }
}

// let sss = {
//   "feed": {
//   "author": {
//     "name": {
//       "label": "iTunes Store"
//     },
//     "uri": {
//       "label": "http://www.apple.com/uk/itunes/"
//     }
//   },
//   "entry": [
//     {
//       "im:name": {
//         "label": "Viber Messenger – Text & Call"
//       },
//       "rights": {
//         "label": "© Viber Media S.à r.l."
//       },
//       "im:price": {
//         "label": "Get",
//         "attributes": {
//           "amount": "0.00000",
//           "currency": "USD"
//         }
//       },
//       "im:image": [
//         {
//           "label": "http://is3.mzstatic.com/image/thumb/Purple118/v4/67/ce/f7/67cef723-5513-af30-199e-67005f06c66c/AppIcon-1x_U007emarketing-0-85-220-0-6.png/53x53bb-85.png",
//           "attributes": {
//             "height": "53"
//           }
//         },
//         {
//           "label": "http://is5.mzstatic.com/image/thumb/Purple118/v4/67/ce/f7/67cef723-5513-af30-199e-67005f06c66c/AppIcon-1x_U007emarketing-0-85-220-0-6.png/75x75bb-85.png",
//           "attributes": {
//             "height": "75"
//           }
//         },
//         {
//           "label": "http://is2.mzstatic.com/image/thumb/Purple118/v4/67/ce/f7/67cef723-5513-af30-199e-67005f06c66c/AppIcon-1x_U007emarketing-0-85-220-0-6.png/100x100bb-85.png",
//           "attributes": {
//             "height": "100"
//           }
//         }
//       ],
//       "im:artist": {
//         "label": "Viber Media SARL.",
//         "attributes": {
//           "href": "https://itunes.apple.com/al/developer/viber-media-sarl/id382617923?mt=8&uo=2"
//         }
//       },
//       "title": {
//         "label": "Viber Messenger – Text & Call - Viber Media SARL."
//       },
//       "link": {
//         "attributes": {
//           "rel": "alternate",
//           "type": "text/html",
//           "href": "https://itunes.apple.com/al/app/viber-messenger-text-call/id382617920?mt=8&uo=2"
//         }
//       },
//       "id": {
//         "label": "https://itunes.apple.com/al/app/viber-messenger-text-call/id382617920?mt=8&uo=2",
//         "attributes": {
//           "im:id": "382617920",
//           "im:bundleId": "com.viber"
//         }
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "category": {
//         "attributes": {
//           "im:id": "6005",
//           "term": "Social Networking",
//           "scheme": "https://itunes.apple.com/al/genre/ios-social-networking/id6005?mt=8&uo=2",
//           "label": "Social Networking"
//         }
//       },
//       "im:releaseDate": {
//         "label": "2012-05-31T16:42:12-07:00",
//         "attributes": {
//           "label": "31 May 2012"
//         }
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id714810812"
//         },
//         "name": {
//           "label": "eldadedinca"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "8.2.1"
//       },
//       "im:rating": {
//         "label": "1"
//       },
//       "id": {
//         "label": "2221577708"
//       },
//       "title": {
//         "label": "Eldadedinca"
//       },
//       "content": {
//         "label": "I cant open the viber the cod is arrive but when I write it doesnt work the viber said something acess cod doesnt work etc help me because i need for the viber can you open the viber for me please",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id718256201"
//         },
//         "name": {
//           "label": "reshku"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "8.2"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "2174805119"
//       },
//       "title": {
//         "label": "Great app, great service & free"
//       },
//       "content": {
//         "label": "Great app, great service & free",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id679581400"
//         },
//         "name": {
//           "label": "Arif.beqiraj"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "8.2"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "2174353280"
//       },
//       "title": {
//         "label": "Arif beqiraj"
//       },
//       "content": {
//         "label": "Viber is perfect",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id456317055"
//         },
//         "name": {
//           "label": "Edi twens"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "8.1.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "2123291334"
//       },
//       "title": {
//         "label": "👍👍👍"
//       },
//       "content": {
//         "label": "nice👌👍👍👍👍👍👍👍👍👍👍👍",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id192601230"
//         },
//         "name": {
//           "label": "visar.tahiri"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.9.10"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "2014371314"
//       },
//       "title": {
//         "label": "🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️"
//       },
//       "content": {
//         "label": "🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id646579839"
//         },
//         "name": {
//           "label": "uran kosovo"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.9"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1906614631"
//       },
//       "title": {
//         "label": "Perfect"
//       },
//       "content": {
//         "label": "You change our life for good, thank you",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "1"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "2"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id652222053"
//         },
//         "name": {
//           "label": "emmily24"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.9"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1906575905"
//       },
//       "title": {
//         "label": "👌"
//       },
//       "content": {
//         "label": "The best app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id505969119"
//         },
//         "name": {
//           "label": "urim H"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.8"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1860390144"
//       },
//       "title": {
//         "label": "Super Star"
//       },
//       "content": {
//         "label": "Super star ⭐️⭐️⭐️⭐️⭐️👌",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id641236696"
//         },
//         "name": {
//           "label": "Abbas2017"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.7.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1849053298"
//       },
//       "title": {
//         "label": "Review"
//       },
//       "content": {
//         "label": "Thanks a lot . I had a very good call and excellent connection",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "1"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "1"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id567284545"
//         },
//         "name": {
//           "label": "donArli"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.6"
//       },
//       "im:rating": {
//         "label": "1"
//       },
//       "id": {
//         "label": "1818269499"
//       },
//       "title": {
//         "label": "Rallentamento del sistema"
//       },
//       "content": {
//         "label": "Con l’ultimo update di ios 11 si e verificato un vero e proprio rallentamento di sistema quando si utilizza viber , pregasi verificare altrimenti non ti serve a nulla \nGrazie mille",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id456679406"
//         },
//         "name": {
//           "label": "Aniramtaf"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.5"
//       },
//       "im:rating": {
//         "label": "2"
//       },
//       "id": {
//         "label": "1775695082"
//       },
//       "title": {
//         "label": "ALERT!!!! No notified when joined viber!!!"
//       },
//       "content": {
//         "label": "Viber is really a good app one of my favorites BUTTTT one thing i hate about viber is that others get notified when I join viber . I dont want that other people knows when i join viber .bc for example i have not their numbers on my contact lis but they have mine so they can disturb me when notifies that i joined viber PLEASE FIX IT ASAP❤️",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "2"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "2"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id476787947"
//         },
//         "name": {
//           "label": "AfrimV."
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.4"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1768457863"
//       },
//       "title": {
//         "label": "Sir 1️⃣"
//       },
//       "content": {
//         "label": "very good app🇽🇰",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id613679974"
//         },
//         "name": {
//           "label": "SekomQare091989"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.4"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1757636634"
//       },
//       "title": {
//         "label": "Viber"
//       },
//       "content": {
//         "label": "Great,just as always👌",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "1"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "1"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id558673402"
//         },
//         "name": {
//           "label": "MindYourManner"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.4"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1745646521"
//       },
//       "title": {
//         "label": "Best app (hands down)"
//       },
//       "content": {
//         "label": "Most used messaging app from my side by far",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id605779578"
//         },
//         "name": {
//           "label": "Shkolla Shkolla 😜"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.4"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1734665579"
//       },
//       "title": {
//         "label": "Haloooooooooooooooo"
//       },
//       "content": {
//         "label": "It's a bit slow but anyway it's kinda good.",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "2"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "2"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id324824895"
//         },
//         "name": {
//           "label": "Bloons1"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1725731053"
//       },
//       "title": {
//         "label": "Great!"
//       },
//       "content": {
//         "label": "Very useful app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id586631019"
//         },
//         "name": {
//           "label": "dccxcuj"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.0"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1671463429"
//       },
//       "title": {
//         "label": "Vu"
//       },
//       "content": {
//         "label": "Tgl  w☺️😏😏😒😏👌☺️☺️😁🙈👀🤣😄😇😇😄👍🏾😔👍🏾😉😉🙈✌️👀👀🦆🐔",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id586063005"
//         },
//         "name": {
//           "label": "Resmije"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "7.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1670214105"
//       },
//       "title": {
//         "label": "Resmije"
//       },
//       "content": {
//         "label": "Duraku",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id426323624"
//         },
//         "name": {
//           "label": "Arbnnorx"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.9.5"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1656767183"
//       },
//       "title": {
//         "label": "Thanks"
//       },
//       "content": {
//         "label": "i just wanted to thank you",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id543056090"
//         },
//         "name": {
//           "label": "Emanuelo77"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.9.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1649011112"
//       },
//       "title": {
//         "label": "Nice app"
//       },
//       "content": {
//         "label": "Very good app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id497788746"
//         },
//         "name": {
//           "label": "Altin b"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.9.2"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1638432364"
//       },
//       "title": {
//         "label": "X viber"
//       },
//       "content": {
//         "label": "Very good app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id474411083"
//         },
//         "name": {
//           "label": "Tosi1977"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8.5"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1621341170"
//       },
//       "title": {
//         "label": "Simple the best"
//       },
//       "content": {
//         "label": "The best application of all time",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id531138472"
//         },
//         "name": {
//           "label": "Kapitaj"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8.7"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1616065045"
//       },
//       "title": {
//         "label": "Just Great"
//       },
//       "content": {
//         "label": "Yeah true",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id486049203"
//         },
//         "name": {
//           "label": "Doriola"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8.5"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1604209691"
//       },
//       "title": {
//         "label": "Dori"
//       },
//       "content": {
//         "label": "I love viber thank you",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id457962241"
//         },
//         "name": {
//           "label": "Ipad mini retina 2"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1596042074"
//       },
//       "title": {
//         "label": "Vibration alert on iPhone 6s"
//       },
//       "content": {
//         "label": "Make the notiffy vibrate shorter .",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "1"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "1"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id542815997"
//         },
//         "name": {
//           "label": "Dorinagjo"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8.2"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1593551099"
//       },
//       "title": {
//         "label": "Wow"
//       },
//       "content": {
//         "label": "Wonderfull",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id457314372"
//         },
//         "name": {
//           "label": "Jonkuqi"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1580699302"
//       },
//       "title": {
//         "label": "To viber"
//       },
//       "content": {
//         "label": "Youre the best app ever. Please continoune and dont stop never!",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id529625221"
//         },
//         "name": {
//           "label": "Grandi2017"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.8"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1576248451"
//       },
//       "title": {
//         "label": "Great support service"
//       },
//       "content": {
//         "label": "Excellent messagging and videocalling app. Viber has one of the best support service. 5 stars well deserved.",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id420919163"
//         },
//         "name": {
//           "label": "Ragip jahiri"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.7.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1570182228"
//       },
//       "title": {
//         "label": "Best viber"
//       },
//       "content": {
//         "label": "Best for ever in the World",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id347378864"
//         },
//         "name": {
//           "label": "Meerdi"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.7.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1568842229"
//       },
//       "title": {
//         "label": "Nice"
//       },
//       "content": {
//         "label": "Sehr gut",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id554551279"
//         },
//         "name": {
//           "label": "Plarent"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1557526740"
//       },
//       "title": {
//         "label": "A++"
//       },
//       "content": {
//         "label": "Great app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id552420013"
//         },
//         "name": {
//           "label": "Xhevahir Bajramaliu"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1549300026"
//       },
//       "title": {
//         "label": "Mr"
//       },
//       "content": {
//         "label": "Excellent!",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id552081460"
//         },
//         "name": {
//           "label": "El kusho"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1548070918"
//       },
//       "title": {
//         "label": "Great app"
//       },
//       "content": {
//         "label": "Great app",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id431719993"
//         },
//         "name": {
//           "label": "Endri Nikaj"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1547384269"
//       },
//       "title": {
//         "label": "Calls and msg"
//       },
//       "content": {
//         "label": "Wonderful quality of calls",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id470341214"
//         },
//         "name": {
//           "label": "Cernaveri"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1543133430"
//       },
//       "title": {
//         "label": "Excellent app"
//       },
//       "content": {
//         "label": "Amazing app!",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id493653568"
//         },
//         "name": {
//           "label": "Idlirbeqiri"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.0"
//       },
//       "im:rating": {
//         "label": "1"
//       },
//       "id": {
//         "label": "1536878153"
//       },
//       "title": {
//         "label": "What"
//       },
//       "content": {
//         "label": "My messages wont send to my friends but they can text me",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id548978351"
//         },
//         "name": {
//           "label": "Taulant Gerguri"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.6.0"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1536523868"
//       },
//       "title": {
//         "label": "Halo Viber"
//       },
//       "content": {
//         "label": "Sent my code",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id309592764"
//         },
//         "name": {
//           "label": "Nexsad1"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.7"
//       },
//       "im:rating": {
//         "label": "1"
//       },
//       "id": {
//         "label": "1527582928"
//       },
//       "title": {
//         "label": "Ipad 4"
//       },
//       "content": {
//         "label": "Not so good for ipad4 retina",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id494362619"
//         },
//         "name": {
//           "label": "Mesenger❤️"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.7"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1517428673"
//       },
//       "title": {
//         "label": "Viber Not Happy"
//       },
//       "content": {
//         "label": "pls iphone 4 no me iphone 6S verzion for iso 7.0 no me  iso 8.0",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id332211623"
//         },
//         "name": {
//           "label": "Jetoni13"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.5"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1505615715"
//       },
//       "title": {
//         "label": "Viber"
//       },
//       "content": {
//         "label": "Emoticons aren't better than they were (i like only the size but not the look). Other new things on this update are welcome!",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id394273878"
//         },
//         "name": {
//           "label": "JoanaT1927"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1499187940"
//       },
//       "title": {
//         "label": "Super"
//       },
//       "content": {
//         "label": "👍🌟🌟🌟🌟🌟",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id390066471"
//         },
//         "name": {
//           "label": "Isen.c"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1496076259"
//       },
//       "title": {
//         "label": "Nice"
//       },
//       "content": {
//         "label": ";)",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id536922533"
//         },
//         "name": {
//           "label": "Iijjaa7"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1494812117"
//       },
//       "title": {
//         "label": "Photo"
//       },
//       "content": {
//         "label": "I want to share a problem that is happening to my account..when I change photo profile no one can see it even when they delete my number and add me again..and when somebody write to us automatically we are online like \"obligated\"to respond \nPlease do smth about this ...Waiting for..Thanks",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id536252854"
//         },
//         "name": {
//           "label": "Berti Endis"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.1"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1490370962"
//       },
//       "title": {
//         "label": "Not happy"
//       },
//       "content": {
//         "label": "1.\nNobody is happy with the last version u made now \nTo many people are heaving problem because of\nWe are online we have wii fi on \nAnd viber is off only when we use or somebody write to us we go online that's not good \n\n2.Before was when we close the viber page and didn't  wont to answer,, we was offline even if somebody text to us did not push the viber automatically online ..which is perfect \n\nThen now viber it looks like whatssap then if is the same everybody will delete the viber and use whatssap ,, nobody like to have problems with status.. onlin ofline and nothing is definite ar we on or of are we using the viber or not,, \n\nPleaseese make back the old style of viber please fix those two problems 😔😖",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "3"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "4"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id318892934"
//         },
//         "name": {
//           "label": "Beqa2013"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.0"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1488121305"
//       },
//       "title": {
//         "label": "Shum i mire"
//       },
//       "content": {
//         "label": "Praktik",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id434335893"
//         },
//         "name": {
//           "label": "ArianSefiu"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.0"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1484885823"
//       },
//       "title": {
//         "label": "Very good!"
//       },
//       "content": {
//         "label": "Good one.",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id532549842"
//         },
//         "name": {
//           "label": "Ornela bregu"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.5.0"
//       },
//       "im:rating": {
//         "label": "4"
//       },
//       "id": {
//         "label": "1481530529"
//       },
//       "title": {
//         "label": "Chat privat"
//       },
//       "content": {
//         "label": "Chat hot",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id344837906"
//         },
//         "name": {
//           "label": "Krisnardi"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.3.4"
//       },
//       "im:rating": {
//         "label": "3"
//       },
//       "id": {
//         "label": "1478010981"
//       },
//       "title": {
//         "label": "Sometimes isn't good"
//       },
//       "content": {
//         "label": "Is so so",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id520667536"
//         },
//         "name": {
//           "label": "Qelarraci1"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.3.4"
//       },
//       "im:rating": {
//         "label": "4"
//       },
//       "id": {
//         "label": "1477955743"
//       },
//       "title": {
//         "label": "Viber is very good"
//       },
//       "content": {
//         "label": "My rate is...viber is very good",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     },
//     {
//       "author": {
//         "uri": {
//           "label": "https://itunes.apple.com/al/reviews/id501542718"
//         },
//         "name": {
//           "label": "UNHZ.EU"
//         },
//         "label": ""
//       },
//       "im:version": {
//         "label": "6.3.3"
//       },
//       "im:rating": {
//         "label": "5"
//       },
//       "id": {
//         "label": "1470940348"
//       },
//       "title": {
//         "label": "Erina"
//       },
//       "content": {
//         "label": "Viberi eshte nje aplikacion shum i mirë ....i gatshem me fol me gjithe boten",
//         "attributes": {
//           "type": "text"
//         }
//       },
//       "link": {
//         "attributes": {
//           "rel": "related",
//           "href": "https://itunes.apple.com/al/review?id=382617920&type=Purple%20Software"
//         }
//       },
//       "im:voteSum": {
//         "label": "0"
//       },
//       "im:contentType": {
//         "attributes": {
//           "term": "Application",
//           "label": "Application"
//         }
//       },
//       "im:voteCount": {
//         "label": "0"
//       }
//     }
//   ],
//     "updated": {
//     "label": "2018-03-08T22:32:46-07:00"
//   },
//   "rights": {
//     "label": "Copyright 2008 Apple Inc."
//   },
//   "title": {
//     "label": "iTunes Store: Customer Reviews"
//   },
//   "icon": {
//     "label": "http://itunes.apple.com/favicon.ico"
//   },
//   "link": [
//     {
//       "attributes": {
//         "rel": "alternate",
//         "type": "text/html",
//         "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewGrouping?cc=al&id=25129&mt=8"
//       }
//     },
//     {
//       "attributes": {
//         "rel": "self",
//         "href": "https://itunes.apple.com/al/rss/customerreviews/id=382617920/sortBy=mostRecent/json"
//       }
//     },
//     {
//       "attributes": {
//         "rel": "first",
//         "href": "https://itunes.apple.com/al/rss/customerreviews/page=1/id=382617920/sortby=mostrecent/xml?urlDesc=/customerreviews/id=382617920/sortBy=mostRecent/json"
//       }
//     },
//     {
//       "attributes": {
//         "rel": "last",
//         "href": "https://itunes.apple.com/al/rss/customerreviews/page=7/id=382617920/sortby=mostrecent/xml?urlDesc=/customerreviews/id=382617920/sortBy=mostRecent/json"
//       }
//     },
//     {
//       "attributes": {
//         "rel": "previous",
//         "href": "https://itunes.apple.com/al/rss/customerreviews/page=1/id=382617920/sortby=mostrecent/xml?urlDesc=/customerreviews/id=382617920/sortBy=mostRecent/json"
//       }
//     },
//     {
//       "attributes": {
//         "rel": "next",
//         "href": "https://itunes.apple.com/al/rss/customerreviews/page=2/id=382617920/sortby=mostrecent/xml?urlDesc=/customerreviews/id=382617920/sortBy=mostRecent/json"
//       }
//     }
//   ],
//     "id": {
//     "label": "https://itunes.apple.com/al/rss/customerreviews/id=382617920/sortBy=mostRecent/json"
//   }
// }
// };
