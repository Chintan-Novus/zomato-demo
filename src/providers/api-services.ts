import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the ApiServices provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiServices {

  private options: RequestOptions;
  private baseURL: string = "https://developers.zomato.com/api/v2.1/";
  private userKey: string = "325286aa2df54428845e2a02021f34f8";

  constructor(public http: Http) {
    let headers = new Headers({'Accept': 'application/json'});
    this.options = new RequestOptions({headers: headers});
    this.options.headers.set('user-key', `${this.userKey}`);
  }

  getGeoCode(locationObj) {
    return this.http.get(`${this.baseURL}geocode?lat=` + locationObj.coords.latitude + `&lon=` + locationObj.coords.longitude, this.options).map(res => res.json());
  }

  getCategories() {
    return this.http.get(`${this.baseURL}categories`, this.options).map(res => res.json());
  }

  getCollections(locationId) {
    return this.http.get(`${this.baseURL}collections?city_id=` + locationId, this.options).map(res => res.json());
  }

  getCuisines(locationId) {
    return this.http.get(`${this.baseURL}cuisines?city_id=` + locationId, this.options).map(res => res.json());
  }

  getEstablishments(locationId) {
    return this.http.get(`${this.baseURL}establishments?city_id=` + locationId, this.options).map(res => res.json());
  }

  search(searchObj) {
    return this.http.get(`${this.baseURL}search?entity_id=` + searchObj.entity_id + `&entity_type=` + searchObj.entity_type + `&category=` + searchObj.category + `&collection_id=` + searchObj.collection_id + `&cuisines=` + searchObj.cuisines + `&establishment_type=` + searchObj.establishment_type, this.options).map(res => res.json());
  }

}
