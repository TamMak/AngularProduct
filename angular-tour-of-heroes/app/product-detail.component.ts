//Decorator component and input
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
//import {Location} from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product';

//we created metadata
@Component({
    moduleId: module.id,
  selector: 'my-product-detail',
   templateUrl: 'product-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
//   template: `<div *ngIf="product">
//             <h2>{{product.name}}!</h2>
//           <div><label>Id: </label>
//               {{product.id}}
//           </div>
//           <div>
//               <label>Name: </label>
//               <input [(ngModel)]="product.name" placeholder="name"/>
//           </div>
//         </div>  `
})
export class ProductDetailComponent implements OnInit {

    product: Product;

    constructor(
                private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location
    
            ) {}
      
   ngOnInit(): void {
             this.route.params.forEach((params: Params) => {
             let id = +params['id'];
             this.productService.getProduct(id)
            .then(product => this.product = product);
        });
    }

//  goBack(): void {
//    this.location.back();
//  }
}

