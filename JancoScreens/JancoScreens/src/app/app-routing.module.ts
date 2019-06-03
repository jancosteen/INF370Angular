import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionFormComponent } from './forms/subscription-form/subscription-form.component';

const routes: Routes = [
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'subscription-form', component: SubscriptionFormComponent },
  {
    path: 'subscription', children: [
      { path: '', component: SubscriptionComponent },
      { path: 'edit/id', component: SubscriptionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
