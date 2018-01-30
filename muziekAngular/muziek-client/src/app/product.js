"use strict";
var Product = (function () {
    function Product(name, demonym, currency, talen, borders) {
        this.name = name;
        this.demonym = demonym;
        this.currency = currency;
        this.talen = talen;
        this.borders = borders;
    }
    Product.prototype.SplitBorder = function () {
        this.sBorder = this.borders.split(";");
    };
    Product.prototype.toForm = function () {
        this.SplitBorder();
        return "name=" + this.name + "&demonym=" + this.demonym + "&currency=" + this.currency + "&talen" + this.talen + "&borders=" + this.sBorder;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map