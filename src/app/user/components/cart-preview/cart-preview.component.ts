import {Component, OnInit} from '@angular/core';
import {Item} from "../../../items/state/item.model";
import {CartService} from "../../state/cart.service";
import {CartItem} from "../../state/cart.model";
import {map, Observable} from "rxjs";
import {CartQuery} from "../../state/cart.query";
import {ItemsQuery} from "../../../items/state/items.query";

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  constructor(
    private cartQuery: CartQuery,
    private cartService: CartService,
    private itemQuery: ItemsQuery,
  ) { }

  ngOnInit(): void {
  }

  getCart(): Observable<CartItem[]> {
    return this.cartQuery.selectAll();
  }

  getCartItemDetails(itemId: number): Observable<Item | undefined> {
    // Select could technically return undefined, but in this hardcoded case it can't. It will be ignored later
    return this.itemQuery.selectEntity(itemId);
  }

  removeItemFromCart(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  getTotalCost() {
    return this.cartQuery.selectAll().pipe(map(cartItems => {
      let sum = 0;
      for(const cartItem of cartItems) {
        sum += this.itemQuery.getEntity(cartItem.itemId)!.price * cartItem.amount;
      }
      return sum;
    }));
  }

  getPreviewText(item: (Item | null | undefined), amount: number) {
    // null and undefined are ignored because items are hardcoded and therefore always available. In productive system
    // more elaborate Error handling would be necessary
    return `${item!.title} - $${item!.price} x ${amount}   ($${amount*item!.price})`;
  }

  getCartItemCount() {
    return this.cartQuery.getCount();
  }

}
