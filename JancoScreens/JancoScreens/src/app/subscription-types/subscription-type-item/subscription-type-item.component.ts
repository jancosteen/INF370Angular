import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SubscriptionType } from 'src/app/shared/models/subscription-type.model';

@Component({
  selector: 'app-subscription-type-item',
  templateUrl: './subscription-type-item.component.html',
  styleUrls: ['./subscription-type-item.component.css']
})
export class SubscriptionTypeItemComponent implements OnInit {
  formData: SubscriptionType;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<SubscriptionTypeItemComponent>) { }

  ngOnInit() {
  }

}
