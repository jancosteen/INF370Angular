import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Consultation } from 'src/app/shared/models/consultation.model';

@Component({
  selector: 'app-consultation-item',
  templateUrl: './consultation-item.component.html',
  styleUrls: ['./consultation-item.component.css']
})
export class ConsultationItemComponent implements OnInit {
  formData: Consultation;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ConsultationItemComponent>) { }

  ngOnInit() {
  }

}
