import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../../state/item.model";
import {ItemsService} from "../../state/items.service";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items$!: Observable<Item[]>;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.items$ = this.itemsService.get();
  }

}
