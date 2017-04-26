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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
