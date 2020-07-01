import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {   // "Single Page Applications Part 1" commit a aita use kori nai
    return of(PROMOTIONS.filter(promotion=> promotion.id === id)[0]).pipe(delay(2000));
    // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
    // (promo) bolte PROMOTIONS array ar each object ke bujhano hocce. Jodi (promo.id === id) true hoy tahole filter array te object ta add hoe jabe (). Object gulo obossoi jeno Promotion type hoy.
  }

  getFeaturePrmotion(): Observable<Promotion>{
    return of(PROMOTIONS.filter(promotion=> promotion.featured)[0]).pipe(delay(2000));
  }
}
