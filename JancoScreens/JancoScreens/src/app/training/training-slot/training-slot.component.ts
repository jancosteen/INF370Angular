import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/shared/api/training.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TrainingSlotItemComponent } from '../training-slot-item/training-slot-item.component';

@Component({
  selector: 'app-training-slot',
  templateUrl: './training-slot.component.html',
  styleUrls: ['./training-slot.component.css']
})
export class TrainingSlotComponent implements OnInit {

  constructor(private service: TrainingService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      training_Id: 9999,
      venue: '',
      date: null,
      start: null,
      end: null,
      status: '',
      emp_Id: 99,
    };
    this.service.trainingItem = [];
  }

  AddorEditTraining(tIndex, tId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { tIndex, tId }
    this.dialog.open(TrainingSlotItemComponent, dialogConfig);
  }

}
