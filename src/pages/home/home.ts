import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any =[];
  constructor(public navCtrl: NavController) {
    this.prepareqtyjson();
  }

  prepareqtyjson(){
    let items = [];

    for (let i = 0; i < 300; i++) {
      items.push({
        qty:Math.floor(Math.random() * 10)
      }) 
    }

    this.items = items;
    console.log(items)
  }
}
