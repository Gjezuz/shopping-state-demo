import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {tap} from 'rxjs/operators';
import {Item} from './item.model';
import {ItemsStore} from './items.store';

@Injectable({providedIn: 'root'})
export class ItemsService {

  private itemsUrl = '/api/items';

  constructor(private itemsStore: ItemsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Item[]>(this.itemsUrl).pipe(tap(entities => {
      this.itemsStore.set(entities);
    }));
  }

  add(item: Item) {
    this.itemsStore.add(item);
  }

  update(id: ID, item: Partial<Item>) {
    this.itemsStore.update(id, item);
  }

  remove(id: ID) {
    this.itemsStore.remove(id);
  }

}
