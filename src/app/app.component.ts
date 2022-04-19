import {Component, OnInit} from '@angular/core';
import {CartService} from "./user/service/cart.service";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shopping-state-demo';

  openCart = false;
  checkout = false;

  constructor(
    private cartService: CartService,
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(navEvent => {
      if(navEvent instanceof NavigationEnd) {
        if(navEvent.url === '/user/checkout') {
          this.checkout = true;
        } else {
          this.openCart = true;
          this.checkout = false;
        }
      }
    });
  }

  getCurrentCartItems() {
    const itemCount = this.cartService.getItems().length;
    return itemCount > 0 ? itemCount : '';
  }
}
