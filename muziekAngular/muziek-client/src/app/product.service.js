"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productsServiceURI = 'http://localhost:4000';
    }
    // get all products
    ProductService.prototype.getAllProducts = function () {
        var url = this.productsServiceURI + "/list";
        return this.http.get(url);
    };
    // get a product based on the name
    ProductService.prototype.searchProduct = function (name) {
        var url = this.productsServiceURI + "/search";
        return this.http.post(url, "name=" + name, { headers: new http_1.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });
    };
    // delete a product
    ProductService.prototype.deleteProduct = function (name) {
        var url = this.productsServiceURI + "/delete";
        this.http.post(url, "name=" + name, { headers: new http_1.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') })
            .subscribe();
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map