import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
}

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((leader)=> leader.id === id)[0]).pipe(delay(2000));
  }

  getFeatureLeader(): Observable<Leader>{
    return of(LEADERS.filter((leader)=> leader.featured)[0]).pipe(delay(2000));
  }
}
