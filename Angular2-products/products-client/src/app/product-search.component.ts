import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from './product';
import { ProductService } from './product.service';

@Component ({
   selector: 'product-search',
   templateUrl: './product-search.component.html'
})

export class ProductSearchComponent {
    search: FormGroup;
    result_name: string;
    result_description: string;
    result_price: number;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.productService.searchProduct(this.search.value.name)
                 .subscribe(data => { this.result_name = data.name;
                                      this.result_description = data.description;
                                      this.result_price = data.price; });

   }
}
