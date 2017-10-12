import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { IDatePickerConfig } from 'ng2-date-picker';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  subtitle: string;
  datePickerConfig: IDatePickerConfig = {
    firstDayOfWeek: 'su',
    monthFormat: 'MMMM YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    onOpenDelay: 0,
    weekDayFormat: 'dd',
    showNearMonthDays: false,
    showWeekNumbers: false,
    enableMonthSelector: false,
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'D',
    timeSeparator: ':',
    multipleYearsNavigateBy: 10
  };
  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.title = this.app.title;
    this.subtitle = this.app.subtitle;
  }

}
