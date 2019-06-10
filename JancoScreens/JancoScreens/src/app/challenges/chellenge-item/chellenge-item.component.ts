import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Challenge } from 'src/app/shared/models/challenge.modal';

@Component({
  selector: 'app-chellenge-item',
  templateUrl: './chellenge-item.component.html',
  styleUrls: ['./chellenge-item.component.css']
})
export class ChellengeItemComponent implements OnInit {
  formData: Challenge;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ChellengeItemComponent>) { }

  ngOnInit() {
  }

}
