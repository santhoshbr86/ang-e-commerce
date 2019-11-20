import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../Models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  constructor(private ps: ProductService, private route: Router) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(res =>{
      console.log(res);
      this.products = res;
    })
  }
  productDetail(id){
    this.route.navigate(['products/detail/',id]);
  }
}
