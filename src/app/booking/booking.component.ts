import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';
import { ActionsService } from '../actions.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  viewSubscription: Subscription;
  view: string = 'timeline';
  bookingsListState: boolean = false;
  newBookingState: boolean = false;
  bookingsListStateSubscription: Subscription;
  newBookingStateSubscription: Subscription;
  constructor(private header: HeaderService, private actions: ActionsService) {

    this.viewSubscription = this.actions.getBookingView().subscribe(obj => { this.view = obj.view });
    this.bookingsListStateSubscription = this.actions.getBookingsListState().subscribe(obj => { this.bookingsListState = obj.state });
    this.newBookingStateSubscription = this.actions.getNewBookingState().subscribe(obj => { this.newBookingState = obj.state });
  }
  ngOnInit() {
    this.header.changeTitle("Bookings", "Timeline");
    this.header.setPage("bookings");
    this.actions.toggleBookingsListState(false);
  }




}
