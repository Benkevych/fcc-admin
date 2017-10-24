import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {
  bookingEditMenu;
  guests: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  status: Array<string> = ["Booked", "Confirmed", "Partially Seated", "Seated", "Waiting in Bar", "Got the Check", "No Show", "Cancel", "Cancel & Refund"];
  floors: Array<string> = ["Main Lobby", "Centre", "Side Way", "Terrace"];
  tables: Array<string> = ["T1", "T5", "T9", "T10", "T23", "T32", "T35"];
  shifts: Array<string> = ["Breakfast", "Launch", "Dinner"];
  hours: Array<string> = ["30m", "1h 30m", "2h", "2h 30m", "3h", "3h 30m", "4h"];
  datePickerConfig: IDatePickerConfig = {
    firstDayOfWeek: 'su',
    monthFormat: 'MMMM YYYY',
    closeOnSelect: true,
    disableKeypress: true,
    allowMultiSelect: false,
    onOpenDelay: 0,
    weekDayFormat: 'dd',
    showNearMonthDays: false,
    showWeekNumbers: false,
    enableMonthSelector: false,
    yearFormat: 'YYYY',
    format: "D MMM YYYY",
    showGoToCurrent: false,
    dayBtnFormat: 'D',
    timeSeparator: ':',
    multipleYearsNavigateBy: 10
  };

  timePickerConfig: IDatePickerConfig = {

    closeOnSelect: true,
    disableKeypress: true,
    allowMultiSelect: false,
    onOpenDelay: 0,
    format: "hh:mm A",
    showGoToCurrent: false,
    timeSeparator: ':'
  };

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.bookingEditMenu = document.getElementById("editBookingView");
  }
  closeEditMenu() {
    this.bookingEditMenu.style.display = "none";
  }
}
