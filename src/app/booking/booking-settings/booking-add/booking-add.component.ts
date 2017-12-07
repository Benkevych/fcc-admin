import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';
import { ActionsService } from '../../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.scss']
})
export class BookingAddComponent implements OnInit {
  state = false
  addBookingStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.addBookingStateSubscription = this.actions.getAddBookingState().subscribe(obj => { this.state = obj.state });
  }

  ngOnInit() {
  }

  closeAddBooking() {
    this.actions.toggleAddBookingState(false);
  }

}
