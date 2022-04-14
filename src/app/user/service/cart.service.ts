import { Injectable } from '@angular/core';
import {ShoppingItem} from "../../items/model/item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ShoppingItem[] = [];

  constructor() { }

  addItem(item: ShoppingItem) {
    this.cart.push(item);
  }

  getItems() {
    return this.cart;
  }

  remove(item: ShoppingItem) {
    this.cart.splice(this.cart.indexOf(item), 1);
  }

  getCostOfCart() {
    let price = 0;
    for(const item of this.cart) {
      price += item.price;
    }
    return price;
  }
}
