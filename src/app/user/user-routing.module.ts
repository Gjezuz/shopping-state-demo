import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {CartComponent} from "./components/cart/cart.component";

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
