import { Component, OnInit } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';
var moment = require('moment');
var days = [moment({ days: '8' })];

@Component({
  selector: 'app-step-date',
  templateUrl: './step-date.component.html',
  styleUrls: ['./step-date.component.scss']
})

export class StepDateComponent implements OnInit {

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
    multipleYearsNavigateBy: 10,
    isDayDisabledCallback: function (e) {
      return e.isSame(days[0]);
    }

  };
  selectedDate;
  nextMonth;;
  constructor() {

  }

  ngOnInit() {
    this.selectedDate = new Date();
    this.nextMonth = moment(new Date()).add(1, 'M');

  }

}
