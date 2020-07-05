import { Component, OnInit, Inject} from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[]; // dishes = DISHES
  errMss: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') public BaseURL) /* @Inject comes here for injecting a value within 
    constructor (This value is declared as a service in app.module.ts) || BaseURL ke 
    public na dile HTML a use korlei error dekhabe */{}

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes=dishes,
    (error) => this.errMss = <any>error);
  }
}
