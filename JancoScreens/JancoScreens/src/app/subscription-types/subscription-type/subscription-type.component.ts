import { Component, OnInit } from '@angular/core';
import { SubscriptionTypeService } from 'src/app/shared/api/subscription-type.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SubscriptionTypeItemComponent } from '../subscription-type-item/subscription-type-item.component';

@Component({
  selector: 'app-subscription-type',
  templateUrl: './subscription-type.component.html',
  styleUrls: ['./subscription-type.component.css']
})
export class SubscriptionTypeComponent implements OnInit {

  constructor(private service: SubscriptionTypeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      subscription_Type_Id: 9999,
      details: 'xxxxxxxxxxxxxxxxx'
    };
    this.service.subTypeItem = [];
  }

  AddorEditSubType(subTypeItemIndex, subTypeId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { subTypeItemIndex, subTypeId }
    this.dialog.open(SubscriptionTypeItemComponent, dialogConfig);
  }

}
