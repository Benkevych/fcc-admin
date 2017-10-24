import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';
@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.scss']
})
export class BookingAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeAddBooking() {
    document.getElementById("addBooking").style.display = "none";
  }

}
