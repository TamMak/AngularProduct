
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Product } from './product';
import { ProductDetailComponent } from './product-detail.component';


//import { ClassName } from './class-name';

@NgModule({
  //imports array contains the list of external modules 
  //used by our application  
  imports: [ 
             BrowserModule,
             FormsModule
                ],
    // declarations list of all components, pipes, and directives 
  //that we created and that belong in our application's module.
  declarations: [ AppComponent,
                  ProductDetailComponent 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
