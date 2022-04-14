import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {ShoppingItem} from "../items/model/item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemsMockService implements InMemoryDbService {

  createDb() {
    const items: ShoppingItem[] = [
      {
        id: 1,
        title: 'Socks',
        price: 4.99
      },
      {
        id: 2,
        title: 'Jeans',
        price: 44.99
      },
      {
        id: 3,
        title: 'Jacket',
        price: 64.99
      },
      {
        id: 4,
        title: 'Tie',
        price: 24.99
      },
      {
        id: 5,
        title: 'Scarf',
        price: 7.99
      },
      {
        id: 6,
        title: 'Sneaker',
        price: 29.99
      },
      {
        id: 7,
        title: 'Boots',
        price: 49.99
      },
      {
        id: 8,
        title: 'Skirt',
        price: 28.99
      },
      {
        id: 9,
        title: 'Blouse',
        price: 34.99
      },
      {
        id: 10,
        title: 'Hat',
        price: 14.99
      },
      {
        id: 11,
        title: 'Bag',
        price: 33.99
      },
      {
        id: 12,
        title: 'Umbrella',
        price: 3.99
      }
    ];
    return {items};
  }
}
