import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ShoppingItem} from "../../../items/model/item.interface";

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  getCart() {
    return this.cartService.getItems();
  }

  removeItemFromCart(item: ShoppingItem) {
    this.cartService.remove(item);
  }

  getTotalCost() {
    return this.cartService.getCostOfCart();
  }

}
