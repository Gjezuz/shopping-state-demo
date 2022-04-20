import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {CartQuery} from "./user/state/cart.query";
import {map} from "rxjs";

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
    private cartQuery: CartQuery,
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
    return this.cartQuery.selectAll().pipe(map(cartItems => {
      let count = 0;
      for(const cartItem of cartItems) {
        count += cartItem.amount;
      }
      return count > 0 ? count : '';
    }));
  }
}
