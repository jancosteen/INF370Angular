import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Training } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-training-slot-item',
  templateUrl: './training-slot-item.component.html',
  styleUrls: ['./training-slot-item.component.css']
})
export class TrainingSlotItemComponent implements OnInit {
  formData: Training;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<TrainingSlotItemComponent>) { }

  ngOnInit() {
  }

}
