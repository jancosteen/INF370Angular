import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { SubscriptionTypesComponent } from './subscription-types/subscription-types.component';
import { SubscriptionTypeComponent } from './subscription-types/subscription-type/subscription-type.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { TrainingComponent } from './training/training.component';
import { TrainingSlotComponent } from './training/training-slot/training-slot.component';
import { BuychallengeComponent } from './frontend/buychallenge/buychallenge.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscription', pathMatch: 'full' },
  { path: 'subscriptions', component: SubscriptionsComponent },
  {
    path: 'subscription', children: [
      { path: '', component: SubscriptionComponent },
      { path: 'edit/:id', component: SubscriptionComponent }
    ]
  },
  { path: 'challenges', component: ChallengesComponent },
  {
    path: 'challenge', children: [
      { path: '', component: ChallengeComponent },
      { path: 'edit/id', component: ChallengeComponent }
    ]
  },
  { path: 'frontend', component: ChallengesComponent },
  {
    path: 'buychallenge', children: [
      { path: '', component: BuychallengeComponent },
      { path: 'edit/id', component: BuychallengeComponent }
    ]
  },
  { path: 'subscription-types', component: SubscriptionTypesComponent },
  {
    path: 'subscription-type', children: [
      { path: '', component: SubscriptionTypeComponent },
      { path: 'edit/id', component: SubscriptionTypeComponent }
    ]
  },
  { path: 'consultations', component: ConsultationsComponent },
  {
    path: 'consultation', children: [
      { path: '', component: ConsultationComponent },
      { path: 'edit/id', component: ConsultationComponent }
    ]
  },
  { path: 'training', component: TrainingComponent },
  {
    path: 'training-slot', children: [
      { path: '', component: TrainingSlotComponent },
      { path: 'edit/:id', component: TrainingSlotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
