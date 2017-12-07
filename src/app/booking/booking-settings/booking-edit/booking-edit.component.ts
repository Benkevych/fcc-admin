import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IDatePickerConfig, DatePickerComponent } from 'ng2-date-picker';
import { SelectComponent } from "ng2-select/ng2-select";
import { Subscription } from 'rxjs/Subscription';
import { ActionsService } from '../../../actions.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})

export class BookingEditComponent implements OnInit {
  bookingEditState = false;
  bookingEditStateSubscription: Subscription;
  statusIcon = "";
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

  constructor(private actions: ActionsService) {
    this.bookingEditStateSubscription = this.actions.getBookingEditState().subscribe(obj => { this.bookingEditState = obj.state; });
  }
  @ViewChildren(SelectComponent) selectElements: QueryList<SelectComponent>;
  @ViewChildren(DatePickerComponent) dateElements: QueryList<DatePickerComponent>;

  public closeOtherSelects(element) {
    if (element.optionsOpened == true) {
      let elementsToclose = this.selectElements.filter(function (el: any) {
        return (el != element && el.optionsOpened == true)
      });
      elementsToclose.forEach(function (e: SelectComponent) {
        e.clickedOutside();
      })
      this.dateElements.forEach(function (e: DatePickerComponent) {
        e.hideCalendar();
      })
    }

  }
  public closeOtherCalendars(element) {
    if (element.optionsOpened == true) {
      let elementsToclose = this.dateElements.filter(function (el: any) {
        return (el != element && el.optionsOpened == true)
      });
      elementsToclose.forEach(function (e: DatePickerComponent) {
        e.hideCalendar();
      })
      this.selectElements.forEach(function (e: SelectComponent) {
        e.clickedOutside();
      })
    }
  }
  ngOnInit() {
  }
  closeEditMenu() {
    this.actions.toggleBookingEditState(false);
  }
  statusSelected(event) {
    if (event.text == "Booked")
      this.statusIcon = "statusIcon icon-booked";
    else if (event.text == "Confirmed")
      this.statusIcon = "statusIcon icon-confirmed";
    else if (event.text == "Partially Seated")
      this.statusIcon = "statusIcon icon-part-seated";
    else if (event.text == "Seated")
      this.statusIcon = "statusIcon icon-seated";
    else if (event.text == "Waiting in Bar")
      this.statusIcon = "statusIcon icon-waiting";
    else if (event.text == "Got the Check")
      this.statusIcon = "statusIcon icon-check";
    else if (event.text == "No Show")
      this.statusIcon = "statusIcon icon-no-show";
    else if (event.text == "Cancel")
      this.statusIcon = "statusIcon icon-cancel";
    else if (event.text == "Cancel & Refund")
      this.statusIcon = "statusIcon icon-refund";
  }
}
