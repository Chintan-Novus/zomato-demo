import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-collection-list',
  templateUrl: 'collection-list.html',
})
export class CollectionList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
