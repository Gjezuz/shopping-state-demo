import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from "./components/item-list/item-list.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'details/:id',
    component: ItemDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
