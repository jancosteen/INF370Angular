import { Injectable } from '@angular/core';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  formData: Consultation;
  consItem: Consultation[];

  constructor() { }
}
