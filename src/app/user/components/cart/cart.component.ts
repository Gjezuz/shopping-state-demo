import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Item} from "../../../items/state/item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: Item[];
  cartPrice!: number;

  constructor(
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartPrice = this.cartService.getCostOfCart();
  }

  removeItemFromCart(item: Item) {
    this.cartService.remove(item);
  }

}
