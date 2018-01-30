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
var forms_1 = require("@angular/forms");
var product_service_1 = require("./product.service");
var ProductSearchComponent = (function () {
    function ProductSearchComponent(productService) {
        this.productService = productService;
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        this.search = new forms_1.FormGroup({
            name: new forms_1.FormControl('')
        });
    };
    ProductSearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.productService.searchProduct(this.search.value.name)
            .subscribe(function (data) {
            _this.result_name = data.name;
            _this.result_borders = data.borders;
            _this.result_currency = data.currency;
            _this.result_demonym = data.demonym;
            _this.result_talen = data.talen;
        });
    };
    return ProductSearchComponent;
}());
ProductSearchComponent = __decorate([
    core_1.Component({
        selector: 'product-search',
        templateUrl: './product-search.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductSearchComponent);
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map