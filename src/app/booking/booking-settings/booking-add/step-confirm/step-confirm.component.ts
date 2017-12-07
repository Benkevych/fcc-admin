import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../../../actions.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-step-confirm',
  templateUrl: './step-confirm.component.html',
  styleUrls: ['./step-confirm.component.scss']
})
export class StepConfirmComponent implements OnInit {

  constructor(private actions: ActionsService) {

  }

  ngOnInit() {
  }
  closeAddBooking() {
    this.actions.toggleAddBookingState(false);
  }
}
