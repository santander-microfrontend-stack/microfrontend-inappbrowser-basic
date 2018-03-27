import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the InAppBrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-in-app-browser',
  templateUrl: 'in-app-browser.html',
})
export class InAppBrowserPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser ) {
  }

  ngOnInit(){
    //const browser = this.iab.create('https://ionic.io','_self',{location:'no'}); 
    const browser = this.iab.create('https://radiant-brushlands-62644.herokuapp.com/','_self',{location:'yes'});
    browser.on('loadstop').subscribe(event => {
      console.log('loadstop');
      browser.insertCSS({ code: "body{color: red;" });
    });
    browser.on('loadstart').subscribe(event => {
      console.log('loadstart');
      browser.insertCSS({ code: "body{color: red;" });
    });
    browser.on('loaderror').subscribe(event => {
      console.log('loaderror');
      browser.insertCSS({ code: "body{color: red;" });
    });
    browser.on('exit').subscribe(event => {
      console.log('exit');
      browser.insertCSS({ code: "body{color: red;" });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InAppBrowserPage');
  }

}
