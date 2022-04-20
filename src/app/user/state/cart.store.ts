import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {CartItem} from './cart.model';

export interface CartState extends EntityState<CartItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' , idKey: 'itemId'})
export class CartStore extends EntityStore<CartState> {

  constructor() {
    super();
  }

}
