import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    var header = new HeaderComponent();
    header.setTitle("Bookings", " - Timeline");
  }



}
