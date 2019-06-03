import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  SubData: Subscription;
  subItem: Subscription[];

  constructor() { }
}
