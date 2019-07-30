import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  pages = [
    {
      title: 'Home',
      url: '../menu/home'
    },
    {
      title: 'Cart',
      url:'../menu/cart'
    },
    {
      title: 'Orders',
      url:'../menu/orders'
    },
    {
      title: 'Profile',
      url:'../menu/profile'
    },
  ]; 

}
