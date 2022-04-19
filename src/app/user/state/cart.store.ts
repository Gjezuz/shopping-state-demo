import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Cart } from './cart.model';

export interface CartState extends EntityState<Cart> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {

  constructor() {
    super();
  }

}
