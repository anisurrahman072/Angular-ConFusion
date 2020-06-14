import { Component, OnInit, Input} from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    @Input() /* @Input decorator is used here because we send data from
     menu.component.html(a template file) to dishdetail.component.html(another template file) */
  dish: Dish; // dish would carry an object of Dish type & initially dish has nothing
  
  constructor() { }

  ngOnInit(): void {
  }

}
