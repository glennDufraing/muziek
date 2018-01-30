import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Product } from './product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:4000';

   constructor(private http: HttpClient) {}

   // get all products
   getAllProducts(): Observable<Product[]> {
      let url = `${this.productsServiceURI}/list`;

      return this.http.get<Product[]>(url);
   }

   // insert a new product
   addProduct(product: Product): void {
      let url = `${this.productsServiceURI}/add`;
      // !!! subscribe is needed to execute POST
      this.http.post(url, product.toForm(),
                    {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')})
                    .subscribe();
   }

   // get a product based on the name
   searchProduct(name: string): Observable<any> {
      let url = `${this.productsServiceURI}/search`;

      return this.http.post(url, `name=${name}`,
                    {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
   }

   // delete a product
   deleteProduct(name: string): void {
      let url = `${this.productsServiceURI}/delete`;

      this.http.post(url, `name=${name}`,
                    {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')})
                    .subscribe();
   }
}
