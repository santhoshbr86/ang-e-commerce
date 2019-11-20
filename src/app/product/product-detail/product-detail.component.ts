import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private route:ActivatedRoute, private ps: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(r => {
      this.ps.getProduct(r.id).subscribe(product =>{
       // console.log(product);
        this.product = product;
      })
    });
  }
   

}
