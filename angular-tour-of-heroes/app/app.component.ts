

import { Component } from '@angular/core';

export class Product {
   id: number;
  name: string;
  description: string;
}

 const PRODUCTS: Product[] = [
        { id: 1, name: 'Space vehicle', description:'A space vehicle is a rocket-powered vehicle' }
      , { id: 3, name: 'Mars Naval', description:'Armed ship taht used in the ocean of planet Mars'}
      , { id: 4, name: 'Moonari', description:'A best vehicle used on the surface of moon'}       
           
            ];
              

@Component({

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
  
//  ngIf and ngFor are called “structural directives” 
//  because they can change the structure of portions of the DOM. 
//   In other words, they give structure to the way Angular 
//   displays content in the DOM.
  
//  <!--The (*) prefix to ngFor indicates that the <li> element 
//and its children constitute a master template.
//The let keyword before "hero" identifies hero as a template input variable. 
//We can reference this variable within the template 
//to access a hero’s properties.-->
  
   selector: 'my-app',
  template:`<h2>{{title}}</h2>
  
           <ul class="products"> 
                <li *ngFor = "let product of products"
                      [class.selected]="product === selectedproduct"
                                                  (click)="onSelect(product)">
                   <span class = "badge">{{product.id}},</span>
                          {{product.name}}:-
                          {{product.description}}
                </li>
            </ul>
  
   <div *ngIf="selectedProduct">
            <h2>{{selectedProduct.name}}!</h2>
          <div><label>Id: </label>
              {{selectedProduct.id}}
          </div>
          <div>
              <label>Name: </label>
              <input [(ngModel)]="selectedproduct.name" placeholder="name"/>
          </div>
        </div>   `,

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
                ]
        })
export class AppComponent {
  
  title = 'Our Products!';
  
  //one product
//  product: Product={                  
//                 id: 1,
//                 name: 'Space vehicle',
//                 description:'A space vehicle is a rocket-powered vehicle'  
//                      };
 //const cant used for objects  here but possible outside
   
   products = PRODUCTS;
  selectedProduct: Product;
  
  onSelect(product: Product): void {
  this.selectedProduct = product;
     }

  
  }


