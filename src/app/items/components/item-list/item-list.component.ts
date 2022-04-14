import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../service/item.service";
import {Observable} from "rxjs";
import {ShoppingItem} from "../../model/item.interface";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items$!: Observable<ShoppingItem[]>;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.items$ = this.itemService.getItems();
  }

}
