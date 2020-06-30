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

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve=> {
      setTimeout(()=> {resolve(LEADERS)}, 2000);
  });
}

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter(leader=> id === leader.id)[0]), 2000)
    });
  }

  getFeatureLeader(): Promise<Leader>{
    return new Promise(resolve =>{
      setTimeout(()=> resolve(LEADERS.filter(leader => leader.featured)[0]))
    });
  }
}
