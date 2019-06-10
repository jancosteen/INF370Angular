import { Injectable } from '@angular/core';
import { Challenge } from '../shared/models/challenge.modal';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  challengeData: Challenge;
  challengeItem: Challenge[];

  constructor() { }
}
