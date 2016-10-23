import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
//@Pipe({name: 'exponentialStrength'})
// A pipe is a class decorated with pipe metadata.
// The pipe class implements the PipeTransform interface's 
// transform method that accepts an input value followed 
// by optional parameters and returns the transformed value.
@Pipe({name: 'calculatePrice'})
export class CalculatePricePipe implements PipeTransform {
  transform(price: number, quantity: number): number {
    
     return price * quantity;
  }
}
