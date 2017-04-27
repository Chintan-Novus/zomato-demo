import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RestaurantDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-restaurant-details',
  templateUrl: 'restaurant-details.html',
})
export class RestaurantDetails {

  private restaurantData: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurantData = this.navParams.data.restaurant
    console.log(this.restaurantData);
  }

}
