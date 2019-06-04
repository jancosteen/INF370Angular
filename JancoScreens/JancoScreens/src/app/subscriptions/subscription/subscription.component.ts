import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/api/subscription.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private service: SubscriptionService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.SubData = {
      subscription_Id: null,
      subscription_Type_Id: 0,
      subscription_Start_Date: null,
      subscription_End_Date: null
    };
    this.service.subItem = [];
  }
  AddorEditSub(subItemIndex, subId) {

  }

}
