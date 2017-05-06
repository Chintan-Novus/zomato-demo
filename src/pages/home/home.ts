import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CollectionList} from "../collection-list/collection-list";
import {RestaurantList} from "../restaurant-list/restaurant-list";
import {ApiServices} from "../../providers/api-services";
import {Geolocation} from '@ionic-native/geolocation';
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: any = []
  private collections: any = []
  private cuisines: any = []

  private searchObj = {
    entity_id: '',
    entity_type: '',
    category: '',
    collection_id: '',
    cuisines: '',
    establishment_type: '',
    lat: '',
    lon: '',
    radius: 10000
  }

  private loading = {
    category: true,
    collection: true,
    cuisines: true,
    establishments: true
  }

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private apiService: ApiServices, private storage: Storage) {
  }

  ionViewDidLoad() {
    let that = this;
    // get category
    that.storage.ready().then(() => {
      that.storage.get('zomato_category').then(categories => {
        if (categories) {
          that.categories = categories
          that.loading.category = false
        } else {
          that.getCategory()
        }
      })
    });

    this.getMyLocation().then(geoLoc => {
      // return that.getGeoCodeData(geoLoc)
      that.searchObj.lat = geoLoc.coords.latitude
      that.searchObj.lon = geoLoc.coords.longitude
      that.getCollectionList(geoLoc)
    }).then(result => {
      // this.searchObj.entity_id = result.location.city_id
      // that.getCollectionList(result)
    })
  }

  getMyLocation(): Promise<any> {
    let that = this
    return that.geolocation.getCurrentPosition()
  }

  getGeoCodeData(geoLocation): Promise<any> {
    let that = this
    return that.apiService.getGeoCode(geoLocation).toPromise()
  }

  getCollectionList(geoLoc) {
    let that = this
    that.apiService.getCollections(geoLoc).subscribe(result => {
      that.collections = result
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
      that.storage.ready().then(() => {
        that.storage.set('zomato_category', that.categories)
      })
    }, error => {
      console.log(error);
    }, () => {
      that.loading.category = false
    })
  }

  getCuisines(result) {
    let that = this
    that.apiService.getCuisines(result.location.city_id).subscribe(result => {
      that.cuisines = result.cuisines
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
    if (type == 'collection') {
      this.searchObj.collection_id = category.collection.collection_id
      category.name = category.collection.title
    } else if (type == 'category') {
      this.searchObj.category = category.id
    } else if (type == 'cuisines') {
      this.searchObj.cuisines = category.cuisine_id
      category.name = category.cuisine_name
    }

    this.navCtrl.push(RestaurantList, {
      category: category,
      searchObj: this.searchObj,
      title: category.name
    })
  }
}
