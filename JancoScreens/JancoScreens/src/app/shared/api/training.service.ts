import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  formData: Training;
  trainingItem: Training[];

  constructor() { }
}
