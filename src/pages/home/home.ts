import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CollectionList} from "../collection-list/collection-list";
import {RestaurantList} from "../restaurant-list/restaurant-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: any
  private collections: any

  constructor(public navCtrl: NavController) {

    this.categories = [
      {
        id: 1,
        name: 'Delivery',
        image: 'delivery.png'
      },
      {
        id: 2,
        name: 'Breakfast',
        image: 'breakfast.png'
      },
      {
        id: 3,
        name: 'Lunch',
        image: 'lunch.png'
      },
      {
        id: 4,
        name: 'Dinner',
        image: 'dinner.png'
      },
      {
        id: 5,
        name: 'Cafes',
        image: 'cafes.png'
      },
      {
        id: 6,
        name: 'Luxury Dining',
        image: 'luxury_dining.png'
      },
      {
        id: 7,
        name: 'Desserts & Bakes',
        image: 'desserts.png'
      }
    ]
    this.collections = [
      {
        id: 1,
        name: 'Trending this week',
        desc: 'The most popular restaurants in town this week',
        image: 'https://b.zmtcdn.com/data/collections/e40960514831cb9b74c552d69eceee0f_1418387628_l.jpg'
      },
      {
        id: 2,
        name: 'Newly opened',
        desc: 'The best new places in town',
        image: 'https://b.zmtcdn.com/data/collections/b8499c7a6b74ddf01497ac8afc86d2e2_1476701306.jpg'
      },
      {
        id: 3,
        name: 'Summer coolers',
        desc: 'The best places to beat the heat with cool treats',
        image: 'https://b.zmtcdn.com/data/collections/c0f12571931f9718a80bfe4457be7d84_1463118521.jpg'
      },
      {
        id: 4,
        name: 'Live sports screenings',
        desc: 'Catch the best sporting action live!',
        image: 'https://b.zmtcdn.com/data/collections/fd65c2af040790c5b5f7f5d1263d4a36_1491467046.jpg'
      }
    ]
  }

  gotoCollectionList() {
    this.navCtrl.push(CollectionList)
  }

  gotoRestaturantList(category) {
    this.navCtrl.push(RestaurantList, {
      category: category
    })
  }
}
