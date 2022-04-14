import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ShoppingItem} from "../model/item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = '/api/items';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.itemsUrl)
  }
}
