import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CollectionList} from "../pages/collection-list/collection-list";
import {RestaurantList} from "../pages/restaurant-list/restaurant-list";
import {RestaurantDetails} from "../pages/restaurant-details/restaurant-details";
import {ApiServices} from "../providers/api-services";
import {HttpModule} from "@angular/http";
import {Geolocation} from '@ionic-native/geolocation';
import {IonicStorageModule} from "@ionic/storage";
import {LaunchNavigator} from "@ionic-native/launch-navigator";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollectionList,
    RestaurantList,
    RestaurantDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CollectionList,
    RestaurantList,
    RestaurantDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiServices,
    Geolocation,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
