import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'; 
import { DISHES } from '../shared/dishes';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => {resolve(DISHES)}, 2000)
    });
  }

  getDish(id: string): Promise<Dish> {   // "Single Page Applications Part 1" commit a aita use kori nai
    return new Promise(resolve => {
      setTimeout(() => {resolve(DISHES.filter((dish) => (dish.id === id))[0])}, 2000)
    });  
    // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
    // (dish) bolte DISHES array ar each object ke bujhano hocce. Jodi (dish.id === id) true hoy tahole filter array te object ta add hoe jabe ().  Object gulo obossoi jeno Dish type hoy.
  }

  getFeatureDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => {resolve(DISHES.filter((dish) => dish.featured)[0])}, 2000)
    });
  }
}