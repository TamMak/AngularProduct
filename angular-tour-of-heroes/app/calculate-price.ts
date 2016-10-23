// Try to come up with similar pipe called calculatePrice which when piped with
// product price calculates total price based on quantity provided.

import { Component } from '@angular/core';

@Component({
  selector: ' calculate-price',
  template: `
    <h2>Price Calculator</h2>
    <div>Price: <input [(ngModel)]="price"></div>
    <div>Quantitiy: <input [(ngModel)]="quantity"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `
})
export class PowerBoostCalculatorComponent {
  price = 5;
  quantity = 1;
}
