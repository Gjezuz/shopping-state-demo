import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/profile/profile.component';
import {CartComponent} from './components/cart/cart.component';
import {UserRoutingModule} from "./user-routing.module";
import {CartPreviewComponent} from './components/cart-preview/cart-preview.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ProfileComponent,
    CartComponent,
    CartPreviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CartPreviewComponent
  ]
})
export class UserModule {
}
