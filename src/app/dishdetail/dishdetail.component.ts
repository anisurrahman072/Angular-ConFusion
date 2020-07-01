import { Component, OnInit, Input} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import {Params, ActivatedRoute } from '@angular/router'; /* ActivatedRoute service gives me permissopn to 
access the URL that come from Menu Component || Params na use korew shob kisu kaj kortecilo*/
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish; // dish would carry an object of Dish type & initially dish has nothing
  dishIds: string[];
  prev: string;
  next: string;
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
    this.route.params /* this params is an observable of ActivatedRoute service */
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id']))) /* here Params is a 
thing of Angular Router which just fetch id from parameter id || and params id not an observable here*/
      .subscribe((dish) => { this.dish = dish; this.setPrevNext(dish.id) });
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    return this.location.back();
  }

}
