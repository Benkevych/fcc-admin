import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { IDatePickerConfig, DatePickerComponent } from 'ng2-date-picker';
import { SelectComponent } from "ng2-select/ng2-select";
import { HeaderService } from '../header.service';
import { ActionsService } from '../actions.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  view: string = "timeline";
  title: string;
  subtitle: string;
  page: string;
  shiftPackageState: boolean = false;
  rulesState: boolean = false;
  shiftPackageStateSubscription: Subscription;
  floorPackageState: boolean = false;
  floorPackageStateSubscription: Subscription;
  rulesStateSubscription: Subscription;
  mobileMenuState: boolean = false;
  mobileMenuSubscription: Subscription;
  mobileSortingState: boolean = true;
  mobileSortingSubscription: Subscription;
  bookingsListState: boolean = false;
  titleSubscription: Subscription;
  pageSubscription: Subscription;
  bookingsListStateSubscription: Subscription;
  shifts: Array<string> = ['Breakfast', 'Launch', 'Dinner'];
  floors: Array<string> = ['All Floor', 'Main Lobby', 'Centre', 'Side Way', 'Terrace'];
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
  constructor(private header: HeaderService, private actions: ActionsService) {
    this.titleSubscription = this.header.getMessage().subscribe(obj => { this.title = obj.title; this.subtitle = obj.subtitle; });
    this.pageSubscription = this.header.getPage().subscribe(obj => { this.page = obj.page });
    this.bookingsListStateSubscription = this.actions.getBookingsListState().subscribe(obj => { this.bookingsListState = obj.state });
    this.mobileMenuSubscription = this.actions.getMobileMenuState().subscribe(obj => { this.mobileMenuState = obj.state });
    this.mobileSortingSubscription = this.actions.getMobileSortingState().subscribe(obj => { this.mobileSortingState = obj.state });
    this.shiftPackageStateSubscription = this.actions.getShiftPackageState().subscribe(obj => { this.shiftPackageState = obj.state });
    this.rulesStateSubscription = this.actions.getRulesState().subscribe(obj => { this.rulesState = obj.state });
    this.floorPackageStateSubscription = this.actions.getFloorPackageState().subscribe(obj => { this.floorPackageState = obj.state });
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
  ngOnDestroy() {
  }

  changeView(view) {
    this.actions.changeBookingView(view);
    if (view == 'timeline') {
      this.header.changeTitle("Bookings", "Timeline");
      this.view = "timeline";
    }
    else {
      this.header.changeTitle("Bookings", "Floor");
      this.view = "floor";
    }
  }
  toggleBookingsList() {
    if (this.bookingsListState)
      this.actions.toggleBookingsListState(false);
    else
      this.actions.toggleBookingsListState(true);
  }
  toggleMobileMenu() {
    if (this.mobileMenuState)
      this.actions.toggleMobileMenuState(false);
    else
      this.actions.toggleMobileMenuState(true);
  }
  toggleSorting() {
    if (this.mobileSortingState)
      this.actions.toggleMobileSortingState(false);
    else
      this.actions.toggleMobileSortingState(true);
  }
}
