import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/Comment';

import {Params, ActivatedRoute } from '@angular/router'; /* ActivatedRoute service gives me permissopn to 
access the URL that come from Menu Component || Params na use korew shob kisu kaj kortecilo*/
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  commentForm: FormGroup;
  comment: Comment;
  date: string;
  @ViewChild('fform')commentFormDirective;

  formErrors = {
    'comment': '',
    'author': ''
  }
  validationMessages = {
    'comment': {
      'required': 'Comment is required'
    },
    'author': {
      'required': 'Author name is required',
      'minlength': 'Author name must be atleast 2 characters long'
    }
  }
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { 
      this.createForm();
    }

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

  createForm(){
    this.commentForm = this.fb.group({
      'rating': 5,
      'comment': ['', Validators.required],
      'author': ['', [Validators.required, Validators.minLength(2)]]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChange(data));
  }

  onSubmit(){
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      'rating': 5,
      'comment': '',
      'author': ''
    });
    this.comment.date = new Date().toISOString(); /* adding "date" prototype in "comment" object || 
JavaScript method "toISOString()" auto creates current date for me */
    this.dish.comments.push(this.comment);  // pushing "comment" object into comments of Dish class
  }

  onValueChange(data?: any){
    for(const field in this.formErrors){
      const control = this.commentForm.get(field);
      this.formErrors[field] = '';
      if(control.dirty && control.invalid){
        for(const message in control.errors){
          this.formErrors[field] += this.validationMessages[field][message] + ' ';
        }
      }
    }
  }

}