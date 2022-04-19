import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ShoppingItem} from "../../../items/model/item.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: ShoppingItem[];
  cartPrice!: number;

  constructor(
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartPrice = this.cartService.getCostOfCart();
  }

  removeItemFromCart(item: ShoppingItem) {
    this.cartService.remove(item);
  }

}
