import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleBookingStatus(action) {
    if (action == "show") {
      document.getElementById("bookingStatusMenu").style.left = "0";
    }
    else {
      document.getElementById("bookingStatusMenu").style.left = "100%";
    }
  }

}
