import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscriptions/subscription/subscription.component';
import { SubscriptionItemComponent } from './subscriptions/subscription-item/subscription-item.component';
import { SubscriptionService } from './shared/api/subscription.service';
import { FormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './forms/subscription-form/subscription-form.component'

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    SubscriptionItemComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
