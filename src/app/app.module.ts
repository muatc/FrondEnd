import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';//su dung form


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { Baitap3Component } from './baitap3/baitap3.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductComponent,
    Baitap3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
