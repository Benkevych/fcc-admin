import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  subtitle: string;
  shifts: Array<string> = ['Breakfast', 'Launch', 'Dinner'];
  floors: Array<string> = ['All Floor', 'Main Lobby', 'Centre', 'Side Way', 'Terrace', 'Main Lobby', 'Centre', 'Side Way', 'Terrace', 'Main Lobby', 'Centre', 'Side Way', 'Terrace'];
  additems: Array<string> = ['Normal Booking', 'Walk - In'];
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
  constructor() {
    this.title = "Title";
    this.subtitle = " - subtitle"
  }

  ngOnInit() {
  }
  setTitle(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
    console.log(this.title + this.subtitle);

  }
  showFloorView() {
    document.getElementById("timelineView").style.display = "none";
    document.getElementById("floorView").style.display = "flex";
    document.getElementById("NewBookingMenu").style.display = "none";

    document.getElementById("timelineMenu").style.display = "none";

  }
  showTimelineView() {
    document.getElementById("floorView").style.display = "none";
    document.getElementById("timelineView").style.display = "flex";
    document.getElementById("timelineMenu").style.display = "none";
  }
  showBookingsList() {

  }
}
