
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
//import { Product } from './product';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductService }         from './product.service';
//import { ClassName } from './class-name';
import{DashboardComponent} from './dashboard.component'
import { AppRoutingModule }     from './app-routing.module';
/**
 * The Angular router is an external, optional Angular NgModule called RouterModule. 
 * The router is a combination of multiple provided services (RouterModule), 
 * multiple directives (RouterOutlet, RouterLink, RouterLinkActive), and a configuration (Routes). 
 * We'll configure our routes first.
 *  */

@NgModule({
  //imports array contains the list of external modules 
  //used by our application  
  imports: [ 
             BrowserModule,
             FormsModule,
             AppRoutingModule 
       ],
    // declarations list of all components, pipes, and directives 
  //that we created and that belong in our application's module.
  declarations: [ AppComponent,
                  DashboardComponent,
                  ProductDetailComponent ,
                  ProductsComponent
                ],
 providers: [ ProductService],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
