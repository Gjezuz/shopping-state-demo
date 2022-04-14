import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListItemComponent } from './components/item-list-item/item-list-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';



@NgModule({
  declarations: [
    ItemListItemComponent,
    ItemListComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
