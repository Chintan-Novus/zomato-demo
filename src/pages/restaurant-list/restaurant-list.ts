import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestaurantDetails} from "../restaurant-details/restaurant-details";

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantList {

  private title: string
  private restaurants: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data.category.name

    this.restaurants = [
      {
        id: 1,
        image: 'https://b.zmtcdn.com/data/pictures/4/18438944/e1b1e590ed18905091491478232ce37a_featured_v2.jpg',
        name: 'Blue - Rooftop Cafe Restaurant Bistro',
        location: {
          city: 'Ahmedabad',
          locality: 'C.G Road',
          address: 'Shop 10, Circle B, Nyay Marg, Bodakdev, Ahmedabad'
        },
        cuisines: 'American, Burger, Diner',
        user_rating: {
          aggregate_rating: "4.0",
          rating_text: "Very Good",
          rating_color: "5BA829",
          votes: "433"
        },
        average_cost_for_two: 60,
        price_range: 4,
        currency: "$",
        establishment_types: {
          establishment_type: {
            id: 16,
            name: "Casual Dining"
          }
        }
      },
      {
        id: 2,
        image: 'https://b.zmtcdn.com/data/pictures/7/113537/44fcbc54efe6bd58c2ed98ceeaa27fbd_featured_v2.jpg',
        name: 'Puffizza',
        location: {
          city: 'Ahmedabad',
          locality: 'Gurukul',
          address: 'Shop 10, Circle B, Nyay Marg, Bodakdev, Ahmedabad'
        },
        cuisines: 'Casual Dining, Cafe',
        user_rating: {
          aggregate_rating: "4.0",
          rating_text: "Very Good",
          rating_color: "5BA829",
          votes: "433"
        },
        average_cost_for_two: 60,
        price_range: 4,
        currency: "$",
        establishment_types: {
          establishment_type: {
            id: 16,
            name: "Casual Dining"
          }
        }
      },
      {
        id: 3,
        image: 'https://b.zmtcdn.com/data/pictures/5/113325/e5c735b2f53dd126637988ca0ffc6c8a_featured_v2.jpg',
        name: 'Nini\'s Kitchen',
        location: {
          city: 'Ahmedabad',
          locality: 'Prahlad Nagar',
          address: 'Shop 10, Circle B, Nyay Marg, Bodakdev, Ahmedabad'
        },
        cuisines: 'Casual Dining, Cafe',
        user_rating: {
          aggregate_rating: "4.0",
          rating_text: "Very Good",
          rating_color: "5BA829",
          votes: "433"
        },
        average_cost_for_two: 60,
        price_range: 4,
        currency: "$",
        establishment_types: {
          establishment_type: {
            id: 16,
            name: "Casual Dining"
          }
        }
      }
    ]
  }

  detailsPage(restaurant) {
    this.navCtrl.push(RestaurantDetails, {
      restaurant: restaurant
    })
  }
}
