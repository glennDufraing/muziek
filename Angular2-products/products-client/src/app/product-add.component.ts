import { Component } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

import { ProductService } from './product.service';

@Component ({
   selector: 'product-add',
   templateUrl: './product-add.component.html'
})

export class ProductAddComponent {
   model = new Product('','', 0);

   constructor(private productService: ProductService, private router: Router) {}

   onSubmit() {
       this.productService.addProduct(this.model);
       this.router.navigate(['/list']);
   }
}
