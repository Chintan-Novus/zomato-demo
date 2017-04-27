import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CollectionList} from "../collection-list/collection-list";
import {RestaurantList} from "../restaurant-list/restaurant-list";
import {ApiServices} from "../../providers/api-services";
import {Geolocation} from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: any = []
  private collections: any = []
  private cuisines: any = []
  private establishments: any = []

  private userLocation: any = {
    latitude: '',
    longitude: ''
  }

  private geoCodeData: any;

  private searchObj = {
    entity_id: '',
    entity_type: 'city',
    category: '',
    collection_id: '',
    cuisines: '',
    establishment_type: ''
  }

  private loading = {
    category: true,
    collection: true,
    cuisines: true,
    establishments: true
  }

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private apiService: ApiServices) {
    let that = this

    that.getMyLocation()
    that.getCategory()
  }

  getMyLocation() {
    let that = this
    that.geolocation.getCurrentPosition().then((resp) => {

      that.userLocation.latitude = resp.coords.latitude;
      that.userLocation.longitude = resp.coords.longitude

      that.getGeoCodeData()
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getGeoCodeData() {
    let that = this
    that.apiService.getGeoCode(that.userLocation).subscribe(result => {
      that.geoCodeData = result

      that.getCuisines()
      that.getCollectionList()
    }, error => {
      console.log(error);
    })
  }

  getCollectionList() {
    let that = this
    that.apiService.getCollections(that.geoCodeData.location.city_id).subscribe(result => {
      that.collections = result
      console.log(that.collections);
    }, error => {
      console.log(error);
    }, () => {
      that.loading.collection = false
    })
  }

  getCategory() {
    let that = this
    this.apiService.getCategories().subscribe(result => {
      let index = 0
      for (let category of result.categories) {
        if (category.categories.id == 4) {
          result.categories.splice(index, 1)
        }
        index++
      }
      that.categories = result.categories
    }, error => {
      console.log(error);
    }, () => {
      that.loading.category = false
    })
  }

  getCuisines() {
    let that = this
    that.apiService.getCuisines(that.geoCodeData.location.city_id).subscribe(result => {
      that.cuisines = result.cuisines
      console.log(that.cuisines);
    }, error => {
      console.log(error);
    }, () => {
      that.loading.cuisines = false
    })
  }

  gotoCollectionList() {
    this.navCtrl.push(CollectionList)
  }

  gotoRestaturantList(category, type) {
    this.searchObj.entity_id = this.geoCodeData.location.city_id

    if (type == 'collection') {
      this.searchObj.collection_id = category.collection.collection_id
    } else if (type == 'category') {
      this.searchObj.category = category.id
    } else if (type == 'cuisines') {
      this.searchObj.cuisines = category.cuisine_id
      category.name = category.cuisine_name
    }

    this.navCtrl.push(RestaurantList, {
      category: category,
      searchObj: this.searchObj
    })
  }
}
