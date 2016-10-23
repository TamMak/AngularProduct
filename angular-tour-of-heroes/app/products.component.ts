

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import{ ProductService} from './product.service';

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
  
 
@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: [ 'products.component.css' ]
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

/* 
   selector: 'my-products',
   template:`<h1>{{title}}</h1>
              <h2>My Products</h2>
           <ul class="products"> 
                <li *ngFor = "let product of products"
                      [class.selected]="product === selectedProduct"
                                                  (click)="onSelect(product)">
                   <span class = "badge">{{product.id}}</span>
                          {{product.name}}
                          {{product.description}}
                </li>
            </ul>
   <my-product-detail [product]="selectedProduct"></my-product-detail>`
    ,

      styles: [
                 `
                    .selected {
                    background-color: #CFD8DC !important;
                    color: white;
                  }
                  .products {
                    margin: 0 0 2em 0;
                    list-style-type: none;
                    padding: 0;
                    width: 35em;
                  }
                  .products li {
                    cursor: pointer;
                    position: relative;
                    left: 0;
                    background-color: #EEE;
                    margin: .5em;
                    padding: .3em 0;
                    height: 1.6em;
                    border-radius: 4px;
                  }
                  .products li.selected:hover {
                    background-color: #BBD8DC !important;
                    color: white;
                  }
                  .products li:hover {
                    color: #607D8B;
                    background-color: #DDD;
                    left: .1em;
                  }
                  .products .text {
                    position: relative;
                    top: -3px;
                  }
                  .products .badge {
                    display: inline-block;
                    font-size: small;
                    color: white;
                    padding: 0.8em 0.7em 0 0.7em;
                    background-color: #607D8B;
                    line-height: 1em;
                    position: relative;
                    left: -1px;
                    top: -4px;
                    height: 1.8em;
                    margin-right: .8em;
                    border-radius: 4px 0 0 4px;
                  }`
                ],
*/
 //    providers: [ProductService]
     //The providers array tells Angular to create a fresh 
   //  instance of the ProductService when it creates a new AppComponent.
      
        })
export class ProductsComponent implements OnInit {
  
  title = 'Our Products!';
  
  //one product
//  product: Product={                  
//                 id: 1,
//                 name: 'Space vehicle',
//                 description:'A space vehicle is a rocket-powered vehicle'  
//                      };
 //const cant used for objects  here but possible outside
    
   products: Product[];
  // products = PRODUCTS;
  selectedProduct: Product;  
  constructor(
    private router: Router,
    private productService: ProductService
      ) { }
 
  
  
//  The Hero Service makes a Promise
//A Promise is ... well it's a promise to call us back later 
//when the results are ready. We ask an asynchronous service 
//to do some work and give it a callback function. 
//  It does that work (somewhere) and eventually 
//it calls our function with the results of the work or an error.
  
  
   getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  //The ngOnInit Lifecycle Hook
 // Angular offers a number of interfaces for tapping into
  // critical moments in the component lifecycle: 
  //at creation, after each change, and at its eventual 
  //destruction.Each interface has a single method. 
  //When the component implements that method, Angular calls
  // it at the appropriate time.
    ngOnInit(): void {
    this.getProducts();
  }
  
   onSelect(product: Product): void {
  this.selectedProduct = product;
  
     }

      gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

  
  }


