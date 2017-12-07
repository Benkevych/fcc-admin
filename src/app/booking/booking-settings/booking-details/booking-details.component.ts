import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../../actions.service';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  view: string = "timeline";
  statusState = false;
  moreDetailsState = false;
  bookingEditState = false;
  viewSubscription: Subscription;
  bookingEditStateSubscription: Subscription;
  moreDetailsStateSubscription: Subscription;
  bookingStatusStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.bookingStatusStateSubscription = this.actions.getBookingStatusState().subscribe(obj => { this.statusState = obj.state });
    this.moreDetailsStateSubscription = this.actions.getMoreDetailsState().subscribe(obj => { this.moreDetailsState = obj.state });
    this.bookingEditStateSubscription = this.actions.getBookingEditState().subscribe(obj => { this.bookingEditState = obj.state });
    this.viewSubscription = this.actions.getBookingView().subscribe(obj => { this.view = obj.view; console.log(this.view) });
  }
  ngOnInit() { }
  showBookingStatus() {
    this.actions.toggleBookingStatusState(true);
  }
  closeBookingSettings() {
    this.actions.toggleBookingSettingsState(false);
  }
  toggleNewBookingMenu(action) {

  }
  toggleMoreDetails(event) {
    if (!this.moreDetailsState) {
      this.actions.toggleMoreDetailsState(true);
    } else {
      this.actions.toggleMoreDetailsState(false);
    }
  }



}
