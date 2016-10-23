
// The new AppComponent will be the application shell.
//  It will have some navigation links at the top and
//   a display area below for the pages we navigate to.

import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
     <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
    </nav>   
    <router-outlet></router-outlet>
  `, 
  styleUrls: ['app.component.css'],
  /**
   * We have to tell it where by adding a <router-outlet> 
   * element to the bottom of the template. RouterOutlet is 
   * one of the directives provided by the RouterModule. 
   * The router displays each component immediately below 
   * the <router-outlet> as we navigate through the application.
   * 
   *  */

})
export class AppComponent {
  title = 'Tour of Products';
}
