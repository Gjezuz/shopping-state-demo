import {Injectable} from '@angular/core';
import {Item} from "../../items/state/item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.cart.push(item);
  }

  getItems() {
    return this.cart;
  }

  remove(item: Item) {
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
