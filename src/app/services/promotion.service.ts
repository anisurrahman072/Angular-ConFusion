import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {   // "Single Page Applications Part 1" commit a aita use kori nai
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
    // akhane filter() function ta akta array creaate kore felbe, jar first object tai ami chacci, tai [0] use kora hoece
    // (promo) bolte PROMOTIONS array ar each object ke bujhano hocce. Jodi (promo.id === id) true hoy tahole filter array te object ta add hoe jabe (). Object gulo obossoi jeno Promotion type hoy.
  }

  getFeaturePrmotion(): Promotion{
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}
