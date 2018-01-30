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
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDeleteComponent = (function () {
    function ProductDeleteComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductDeleteComponent.prototype.ngOnInit = function () {
        this.delete = new forms_1.FormGroup({
            name: new forms_1.FormControl('')
        });
    };
    ProductDeleteComponent.prototype.onSubmit = function () {
        this.productService.deleteProduct(this.delete.value.name);
        this.router.navigate(['/list']);
    };
    return ProductDeleteComponent;
}());
ProductDeleteComponent = __decorate([
    core_1.Component({
        selector: 'product-delete',
        templateUrl: './product-delete.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
], ProductDeleteComponent);
exports.ProductDeleteComponent = ProductDeleteComponent;
//# sourceMappingURL=product-delete.component.js.map