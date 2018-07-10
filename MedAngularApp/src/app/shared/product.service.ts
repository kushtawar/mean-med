import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  postProduct(prod: Product) {
    return this.http.post(this.baseURL, prod);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(prod: Product) {
    console.log("prodid"+prod._id);
    return this.http.put(this.baseURL + `/${prod._id}`, prod);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
