import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../../actions.service';
@Component({
  selector: 'app-new-booking-menu',
  templateUrl: './new-booking-menu.component.html',
  styleUrls: ['./new-booking-menu.component.scss']
})
export class NewBookingMenuComponent implements OnInit {
  constructor(private actions: ActionsService) { }
  ngOnInit() {
  }
  closeNewBookingMenu() {
    this.actions.toggleNewBookingState(false);
  }
  showAddBooking() {
    this.actions.toggleAddBookingState(true);
  }
}
