import { Component, OnInit } from '@angular/core';

import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-booking-settings',
  templateUrl: './booking-settings.component.html',
  styleUrls: ['./booking-settings.component.scss']
})
export class BookingSettingsComponent implements OnInit {
  state: boolean;
  bookingSettingsSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.bookingSettingsSubscription = this.actions.getBookingSettingsState().subscribe(obj => { this.state = obj.state });
  }
  ngOnInit() {
  }
}
