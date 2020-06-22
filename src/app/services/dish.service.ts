import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'; 
import { DISHES } from '../shared/dishes';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {   // "Single Page Applications Part 1" commit a aita use kori nai
    return DISHES.filter((dish) => (dish.id === id))[0];  
    // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
    // (dish) bolte DISHES array ar each object ke bujhano hocce. Jodi (dish.id === id) true hoy tahole filter array te object ta add hoe jabe ().  Object gulo obossoi jeno Dish type hoy.
  }

  getFeatureDish(): Dish{
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
