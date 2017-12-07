import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActionsService } from '../../../actions.service';
@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {
  statusState = false;
  bookingStatusStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.bookingStatusStateSubscription = this.actions.getBookingStatusState().subscribe(obj => { this.statusState = obj.state });

  }

  ngOnInit() {
  }
  closeBookingStatus() {
    this.actions.toggleBookingStatusState(false);
  }

}
