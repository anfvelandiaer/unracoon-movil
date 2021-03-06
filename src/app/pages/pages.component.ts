import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['pages.component.scss']
})
export class PagesComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Perfil',
      url: '/learn/perfil',
      icon: 'person'
    },
    {
      title: 'Vocabulario',
      url: '/learn/vocabulary',
      icon: 'albums'
    },
    {
      title: 'Examenes',
      url: '/learn/exam',
      icon: 'checkmark'
    },
    {
      title: 'Foro',
      url: '/learn/foro',
      icon: 'people'
    },
    {
      title: 'Soporte',
      url: '/learn/support',
      icon: 'construct'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtlr: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.statusBar.overlaysWebView(false);
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  toggleMenu() {
    this.menuCtlr.toggle();
  }

}
