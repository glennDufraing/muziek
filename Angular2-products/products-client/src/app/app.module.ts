import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list.component';
import { ProductAddComponent } from './product-add.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductDeleteComponent } from './product-delete.component';
import { ProductService } from './product.service';

// define the routes
const appRoutes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
  { path: 'search', component: ProductSearchComponent },
  { path: 'delete', component: ProductDeleteComponent }
  //{ path: '**', component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ProductListComponent,
                ProductAddComponent, ProductSearchComponent,
                ProductDeleteComponent ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
