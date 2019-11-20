import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../Models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product;
  productFrm:FormGroup;
  files: any[];
  constructor(private fb: FormBuilder, private productService: ProductService) { }
  ngOnInit() {
    this.productFrm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      cost:['', Validators.required],
      availableDate:['', Validators.required],
     });
  }
  saveProduct(){
   // console.log(this.productFrm.value);
  //  const formData = new FormData();
  //   for (const file of this.files) {
  //       formData.append(name, file, file.name);
  //   }
  //   console.log(formData);
  const loadingProduct = {...this.productFrm.value};
  loadingProduct.files = this.files;
    this.productService.postProduct(loadingProduct).subscribe(res => {
      console.log(res);
    })
    // this.productService.addProduct(this.productFrm.value).subscribe(res => {
    //   console.log(res);
    // });
  }
  onFileChanged(event: any) {
    this.files = event.target.files;
  }

}
