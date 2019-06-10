import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/api/challenge.service';
import { NgForm } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ChellengeItemComponent } from '../chellenge-item/chellenge-item.component';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor(private service: ChallengeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.challengeData = {
      challenge_Id: 9999,
      challenge_Detail_Id: 0,
      challenge_Start_Date: null,
      challenge_End_Date: null,
      prize_Id: null
    };
    this.service.challengeItem = [];
  }

  AddorEditChallenge(challengeItemIndex, challengeId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { challengeItemIndex, challengeId }
    this.dialog.open(ChellengeItemComponent, dialogConfig);
  }

}
