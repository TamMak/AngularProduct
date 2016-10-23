/*
* http://usejsdoc.org/
*/

import { Injectable } from '@angular/core';
import{Product} from './product';
import{PRODUCTS} from './mock-products';


@Injectable()
export class ProductService {
    
    //getProducts(): void{}//stub
//   getProducts(): Product[]{
//     
//     return PRODUCTS;
//     
//   }
  
 // Update the HeroService with this Promise-returning getHeroes
    
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
      }
  
//  We're simulating the behavior of an ultra-fast, 
//zero-latency server, by returning an immediately
// resolved Promise with our mock heroes as the result.
    getProductsSlowly(): Promise<Product[]> {
    return new Promise<Product[]>(resolve => setTimeout(resolve, 2000)) // delay 2 seconds
                                            .then(() => this.getProducts());
                                        }

  getProduct(id: number): Promise<Product> {
                    return this.getProducts()
                            .then(products => products.find(product => product.id === id));
                }
}
