import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/shared/api/consultation.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ConsultationItemComponent } from '../consultation-item/consultation-item.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private service: ConsultationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      consultation_Id: 99999,
      emp_Id: 99999,
      venue: '',
      date: null,
      status: '',
      start: null,
      end: null
    };
    this.service.consItem = [];
  }

  AddorEditCons(consIndex, consId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { consIndex, consId }
    this.dialog.open(ConsultationItemComponent, dialogConfig);
  }

}
