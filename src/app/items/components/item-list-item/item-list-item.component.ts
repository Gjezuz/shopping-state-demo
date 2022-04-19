import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../user/service/cart.service";
import {Item} from "../../state/item.model";

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
    this.cartService.addItem(this.item);
  }

}
