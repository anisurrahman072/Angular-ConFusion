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
}
