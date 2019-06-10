import { Injectable } from '@angular/core';
import { SubscriptionType } from '../models/subscription-type.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {
  formData: SubscriptionType;
  subTypeItem: SubscriptionType[];

  constructor() { }
}
