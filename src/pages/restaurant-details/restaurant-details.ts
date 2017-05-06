import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-restaurant-details',
  templateUrl: 'restaurant-details.html',
})
export class RestaurantDetails {

  private restaurantData: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
    this.restaurantData = this.navParams.data.restaurant
    console.log(this.restaurantData.name);
  }

  navigateMe() {

    let options: LaunchNavigatorOptions = {
      destinationName: this.restaurantData.name,
      transportMode: "driving"
    };

    this.launchNavigator.navigate(this.restaurantData.location.address, options)
  }

}
