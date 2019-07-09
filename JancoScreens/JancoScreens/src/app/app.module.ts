import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionItemComponent } from './subscriptions/subscription-item/subscription-item.component';
import { SubscriptionService } from './shared/api/subscription.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from "@angular/material/dialog";
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { ChellengeItemComponent } from './challenges/chellenge-item/chellenge-item.component';
import { ChallengeService } from './api/challenge.service';
import { SubscriptionTypesComponent } from './subscription-types/subscription-types.component';
import { SubscriptionTypeComponent } from './subscription-types/subscription-type/subscription-type.component';
import { SubscriptionTypeItemComponent } from './subscription-types/subscription-type-item/subscription-type-item.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { ConsultationItemComponent } from './consultations/consultation-item/consultation-item.component';
import { TrainingComponent } from './training/training.component';
import { TrainingSlotComponent } from './training/training-slot/training-slot.component';
import { TrainingSlotItemComponent } from './training/training-slot-item/training-slot-item.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workouts/workout/workout.component';
import { WorkoutItemComponent } from './workouts/workout-item/workout-item.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    SubscriptionItemComponent,
    ChallengesComponent,
    ChallengeComponent,
    ChellengeItemComponent,
    SubscriptionTypesComponent,
    SubscriptionTypeComponent,
    SubscriptionTypeItemComponent,
    ConsultationsComponent,
    ConsultationComponent,
    ConsultationItemComponent,
    TrainingComponent,
    TrainingSlotComponent,
    TrainingSlotItemComponent,
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutItemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [SubscriptionItemComponent, ChellengeItemComponent, SubscriptionTypeItemComponent, ConsultationItemComponent,
    TrainingSlotItemComponent],
  providers: [SubscriptionService, ChallengeService],//add api
  bootstrap: [AppComponent]
})
export class AppModule { }
