import { Component, OnInit, Input} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import {Params, ActivatedRoute } from '@angular/router'; /* ActivatedRoute service gives me permissopn to 
access the URL that come from Menu Component || Params na use korew shob kisu kaj kortecilo*/
import { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish; // dish would carry an object of Dish type & initially dish has nothing
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; /* params[] gives me permission to 
access the route Parameter || Params[] is an array to which I can index using the id as the value */
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    return this.location.back();
  }

}
