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
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.title = 'Our Products!';
    }
    //  The Hero Service makes a Promise
    //A Promise is ... well it's a promise to call us back later 
    //when the results are ready. We ask an asynchronous service 
    //to do some work and give it a callback function. 
    //  It does that work (somewhere) and eventually 
    //it calls our function with the results of the work or an error.
    ProductComponent.prototype.getProducts = function () {
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
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductComponent = __decorate([
        core_1.Component({
            //selector: '#my-app', //means <div id ="my-app">
            //selector: '.my-app', //means <div class ="my-app">
            //The ngModel directive also propagates changes to every other binding of the product.name.
            //selector:<my-app>
            //  template: `<h1>{{title}}</h1>
            //             <h2>{{product.name}}!</h2>
            //            <div>
            //                <label>Id: </label>{{product.id}}
            //            </div>
            //            <div>
            //                <label>Updatable Name: </label>
            //                <input [(ngModel)] = "product.name"  placeholder = "name"><br>
            //                <br>
            //                <label>Fixed Name: </label>
            //                <input value = {{product.name}}  placeholder = "Non updatable name">
            //            </div>
            //             <div>
            //                <label>Description: </label>
            //                <textarea value = {{product.description}} placeholder = "About the product"></textarea>
            //            </div>`
            //  ngIf and ngFor are called �structural directives� 
            //  because they can change the structure of portions of the DOM. 
            //   In other words, they give structure to the way Angular 
            //   displays content in the DOM.
            //  <!--The (*) prefix to ngFor indicates that the <li> element 
            //and its children constitute a master template.
            //The let keyword before "hero" identifies hero as a template input variable. 
            //We can reference this variable within the template 
            //to access a hero�s properties.-->
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n              <h2>My Products</h2>\n           <ul class=\"products\"> \n                <li *ngFor = \"let product of products\"\n                      [class.selected]=\"product === selectedProduct\"\n                                                  (click)=\"onSelect(product)\">\n                   <span class = \"badge\">{{product.id}}</span>\n                          {{product.name}}\n                          {{product.description}}\n                </li>\n            </ul>\n   <my-product-detail [product]=\"selectedProduct\"></my-product-detail>",
            styles: [
                "\n                    .selected {\n                    background-color: #CFD8DC !important;\n                    color: white;\n                  }\n                  .products {\n                    margin: 0 0 2em 0;\n                    list-style-type: none;\n                    padding: 0;\n                    width: 35em;\n                  }\n                  .products li {\n                    cursor: pointer;\n                    position: relative;\n                    left: 0;\n                    background-color: #EEE;\n                    margin: .5em;\n                    padding: .3em 0;\n                    height: 1.6em;\n                    border-radius: 4px;\n                  }\n                  .products li.selected:hover {\n                    background-color: #BBD8DC !important;\n                    color: white;\n                  }\n                  .products li:hover {\n                    color: #607D8B;\n                    background-color: #DDD;\n                    left: .1em;\n                  }\n                  .products .text {\n                    position: relative;\n                    top: -3px;\n                  }\n                  .products .badge {\n                    display: inline-block;\n                    font-size: small;\n                    color: white;\n                    padding: 0.8em 0.7em 0 0.7em;\n                    background-color: #607D8B;\n                    line-height: 1em;\n                    position: relative;\n                    left: -1px;\n                    top: -4px;\n                    height: 1.8em;\n                    margin-right: .8em;\n                    border-radius: 4px 0 0 4px;\n                  }"
            ],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map