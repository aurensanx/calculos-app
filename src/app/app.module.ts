import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@game-store';
import {IonicGestureConfig} from './gestures/ionic-gesture-config';
import {Vibration} from '@ionic-native/vibration/ngx';
import {IonicStorageModule} from '@ionic/storage';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        IonicStorageModule.forRoot()],
    providers: [
        StatusBar,
        SplashScreen,
        Vibration,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
