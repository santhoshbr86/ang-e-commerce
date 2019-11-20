import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService   } from '../services/product.service';
@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent, ProductDetailComponent, AddProductComponent]
 })
export class ProductModule { }
