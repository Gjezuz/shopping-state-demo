import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListItemComponent} from './components/item-list-item/item-list-item.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemDetailsComponent} from './components/item-details/item-details.component';
import {ItemsRoutingModule} from "./items-routing.module";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ItemListItemComponent,
    ItemListComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ItemsModule {
}
