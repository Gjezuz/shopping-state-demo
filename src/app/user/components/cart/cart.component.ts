import {Component, OnInit} from '@angular/core';
import {Item} from "../../../items/state/item.model";
import {CartService} from "../../state/cart.service";
import {CartQuery} from "../../state/cart.query";
import {map, Observable} from "rxjs";
import {ItemsQuery} from "../../../items/state/items.query";
import {CartItem} from "../../state/cart.model";
import {tap} from "rxjs/operators";
import {ItemsService} from "../../../items/state/items.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems$!: Observable<CartItem[]>;
  totalCost!: number

  constructor(
    private cartService: CartService,
    private cartQuery: CartQuery,
    private itemQuery: ItemsQuery,
    private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    if (this.itemQuery.getCount() === 0) {
      this.itemsService.get().subscribe(); // if items store is empty, load data to avoid missing references
    }
    this.cartItems$ = this.cartQuery.selectAll().pipe(tap(cartItems => {
      this.totalCost = 0;
      for (const cartItem of cartItems) {
        this.totalCost += this.itemQuery.getEntity(cartItem.itemId)!.price * cartItem.amount;
      }
    }));
  }

  getCartItemDetails(itemId: number): Observable<Item | undefined> {
    // Select could technically return undefined, but in this hardcoded case it can't. It will be ignored later
    return this.itemQuery.selectEntity(itemId);
  }

  removeItemFromCart(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  getPreviewText(item: (Item | null | undefined), amount: number) {
    // null and undefined are ignored because items are hardcoded and therefore always available. In productive system
    // more elaborate Error handling would be necessary
    return `${item!.title} - $${item!.price} x ${amount}   ($${amount * item!.price})`;
  }

  isItemListLoaded() {
    return this.itemQuery.getCount() > 0;
  }

}
