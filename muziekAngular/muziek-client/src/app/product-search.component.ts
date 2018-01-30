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
    result_demonym: string;
    result_talen: number;
    result_borders: string[];
    result_currency:string

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.productService.searchProduct(this.search.value.name)
         .subscribe(data => {
         this.result_name = data.name;
         this.result_borders = data.borders;
         this.result_currency = data.currency;
         this.result_demonym = data.demonym;
         this.result_talen = data.talen;
         });

   }
}
