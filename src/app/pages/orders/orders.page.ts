import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor() { }

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
