import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {CartStore} from './cart.store';
import {CartQuery} from "./cart.query";
import {PersistState} from "@datorama/akita";

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(
    private cartStore: CartStore,
    private http: HttpClient,
    private cartQuery: CartQuery,
    @Inject('persistStorage') private persistStorage: PersistState,
  ) {
    //this.cartStore.set([]);
  }

  addItem(itemId: number) {
    let currentAmount = this.cartQuery.getEntity(itemId);
    if (!currentAmount) {
      currentAmount = {
        itemId: itemId,
        amount: 1,
      };
    } else {
      // create new object, because by default entities in the akita store are immutable
      currentAmount = {
        itemId: itemId,
        amount: currentAmount.amount + 1,
      };
    }

    this.cartStore.upsert(itemId, currentAmount);
  }

  removeItem(itemId: number) {
    let currentAmount = this.cartQuery.getEntity(itemId);
    if (currentAmount!.amount <= 1) {
      this.cartStore.remove(itemId);
    } else {
      currentAmount = {
        itemId: itemId,
        amount: currentAmount!.amount - 1,
      };
      this.cartStore.upsert(itemId, currentAmount);
    }
  }

  clearStorage() {
    this.persistStorage.clearStore('cart')
  }

}
