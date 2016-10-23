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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
//export class Product {
//   id: number;
//  name: string;
//  description: string;
//}
//We add a constructor that also defines a private property.
//We add to the component's providers metadata.
//The constructor itself does nothing. The parameter simultaneously defines 
//a private heroService property and identifies it as a HeroService injection site.//
//Now Angular will know to supply an instance of the HeroService 
//when it creates a new AppComponent.
var ProductsComponent = (function () {
    function ProductsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.title = 'Our Products!';
    }
    //  The Hero Service makes a Promise
    //A Promise is ... well it's a promise to call us back later 
    //when the results are ready. We ask an asynchronous service 
    //to do some work and give it a callback function. 
    //  It does that work (somewhere) and eventually 
    //it calls our function with the results of the work or an error.
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    //The ngOnInit Lifecycle Hook
    // Angular offers a number of interfaces for tapping into
    // critical moments in the component lifecycle: 
    //at creation, after each change, and at its eventual 
    //destruction.Each interface has a single method. 
    //When the component implements that method, Angular calls
    // it at the appropriate time.
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-products',
            templateUrl: 'products.component.html',
            styleUrls: ['products.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map