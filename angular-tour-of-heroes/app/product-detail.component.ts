//Decorator component and input
import { Component, Input } from '@angular/core';
import { Product } from './product';
//we created metadata
@Component({
  selector: 'my-product-detail',
  template: `<div *ngIf="product">
            <h2>{{product.name}}!</h2>
          <div><label>Id: </label>
              {{product.id}}
          </div>
          <div>
              <label>Name: </label>
              <input [(ngModel)]="product.name" placeholder="name"/>
          </div>
        </div>  `
})
export class ProductDetailComponent {
  
             @Input()
        product: Product;
      
}
