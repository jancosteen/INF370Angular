import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/api/subscription.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SubscriptionItemComponent } from '../subscription-item/subscription-item.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private service: SubscriptionService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.SubData = {
      subscription_Id: 9999,
      subscription_Type_Id: 0,
      subscription_Start_Date: null,
      subscription_End_Date: null
    };
    this.service.subItem = [];
  }

  AddorEditSub(subItemIndex, subId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { subItemIndex, subId }
    this.dialog.open(SubscriptionItemComponent, dialogConfig);
  }

}
