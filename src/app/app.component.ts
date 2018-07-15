import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { DocumentosPage } from '../pages/documentos/documentos';
import { configProvider } from '../providers/config/config';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html',
  providers:[
    configProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: configProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigData();

      if(config == null){
        this.rootPage = DocumentosPage;
        configProvider.setConfigData(false);
      }else{
        this.rootPage =TabsPage;
      }
      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
