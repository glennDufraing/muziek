"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./product-list.component");
var product_add_component_1 = require("./product-add.component");
var product_search_component_1 = require("./product-search.component");
var product_delete_component_1 = require("./product-delete.component");
var product_service_1 = require("./product.service");
// define the routes
var appRoutes = [
    { path: 'list', component: product_list_component_1.ProductListComponent },
    { path: 'add', component: product_add_component_1.ProductAddComponent },
    { path: 'search', component: product_search_component_1.ProductSearchComponent },
    { path: 'delete', component: product_delete_component_1.ProductDeleteComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpClientModule,
            forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent,
            product_add_component_1.ProductAddComponent, product_search_component_1.ProductSearchComponent,
            product_delete_component_1.ProductDeleteComponent],
        providers: [product_service_1.ProductService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map