import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../state/item.model";
import {CartService} from "../../../user/state/cart.service";

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss']
})
export class ItemListItemComponent implements OnInit {

  @Input() item!: Item;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addItemToCart() {
    this.cartService.addItem(this.item.id);
  }

}
