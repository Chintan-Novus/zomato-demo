import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestaurantDetails} from "../restaurant-details/restaurant-details";
import {ApiServices} from "../../providers/api-services";

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantList {

  private title: string
  private restaurants: any = []
  private searchObj;
  private dataIsLoading: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServices) {
    this.searchObj = this.navParams.data.searchObj
    this.title = this.navParams.data.title
  }

  ionViewDidLoad() {
    let that = this
    that.apiService.search(that.searchObj).subscribe(result => {
      that.restaurants = result
    }, error => {
      console.log(error);
    }, () => {
      that.dataIsLoading = false;
    })
  }

  detailsPage(restaurant) {
    this.navCtrl.push(RestaurantDetails, {
      restaurant: restaurant
    })
  }
}
