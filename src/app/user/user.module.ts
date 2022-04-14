import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
