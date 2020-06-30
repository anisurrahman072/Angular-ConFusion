import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[]; // dishes = DISHES
  selectedDish : Dish; // selectedDish would carry an object of Dish type

  constructor(private dishService: DishService) {} // The DishService is injected into a new object dishService

  ngOnInit(): void {
    this.dishService.getDishes()
    .then((dishes) => this.dishes=dishes);
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }
}
