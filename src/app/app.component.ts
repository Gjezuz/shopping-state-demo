import { Component } from '@angular/core';
import {CartService} from "./user/service/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-state-demo';

  openCart = false;

  constructor(private cartService: CartService) {
  }

  getCurrentCartItems() {
    const itemCount = this.cartService.getItems().length;
    return itemCount > 0 ? itemCount : '';
  }
}
