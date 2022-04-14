import {Component, Input, OnInit} from '@angular/core';
import {ShoppingItem} from "../../model/item.interface";
import {CartService} from "../../../user/service/cart.service";

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss']
})
export class ItemListItemComponent implements OnInit {

  @Input() item!: ShoppingItem;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addItemToCart() {
    this.cartService.addItem(this.item);
  }

}
