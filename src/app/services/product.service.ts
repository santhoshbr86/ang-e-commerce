import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError, Subject} from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('/api/product');
  }
  postProduct(p:Product){
    return this.http.post('/api/product', p);
  }
  getProduct(id){
    return this.http.get(`/api/product/${id}`);
  }
}
