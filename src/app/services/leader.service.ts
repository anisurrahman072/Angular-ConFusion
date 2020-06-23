import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { from } from 'rxjs';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader{
    return LEADERS.filter((leader)=> (id === leader.id))[0];
  }

  getFeatureLeader(): Leader{
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
