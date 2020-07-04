import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../shared/dish';
import { baseURL } from '../shared/baseurl';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor( private http: HttpClient ) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: string): Observable<Dish> { 
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeatureDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}