import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActionsService {
  private bookingView = new Subject<any>();
  private bookingsList = new Subject<any>();
  private bookingSettings = new Subject<any>();
  private newBooking = new Subject<any>();
  private addBooking = new Subject<any>();
  private bookingStatus = new Subject<any>();
  private moreDetails = new Subject<any>();
  private bookingEdit = new Subject<any>();
  private tableAssign = new Subject<any>();
  private login = new Subject<any>();
  private floorPackage = new Subject<any>();
  private shiftPackage = new Subject<any>();
  private shiftPackageEdit = new Subject<any>();
  private rules = new Subject<any>();
  private tableEdit = new Subject<any>();
  private tableSave = new Subject<any>();
  private tableSelect = new Subject<any>();
  private stuffEdit = new Subject<any>();
  private mobileMenu = new Subject<any>();
  private mobileSorting = new Subject<any>();
  constructor() {
  }

  changeBookingView(view) {
    this.bookingView.next({ view: view });
  }
  getBookingView(): Observable<any> {
    return this.bookingView.asObservable();
  }
  toggleBookingsListState(state) {
    this.bookingsList.next({ state: state });
  }
  getBookingsListState() {
    return this.bookingsList.asObservable();
  }
  toggleBookingSettingsState(state) {
    this.bookingSettings.next({ state: state });
  }
  getBookingSettingsState() {
    return this.bookingSettings.asObservable();
  }
  toggleNewBookingState(state) {
    this.newBooking.next({ state: state });
  }
  getNewBookingState() {
    return this.newBooking.asObservable();
  }
  toggleAddBookingState(state) {
    this.addBooking.next({ state: state });
  }
  getAddBookingState() {
    return this.addBooking.asObservable();
  }
  toggleBookingStatusState(state) {
    this.bookingStatus.next({ state: state });
  }
  getBookingStatusState() {
    return this.bookingStatus.asObservable();
  }
  toggleMoreDetailsState(state) {
    this.moreDetails.next({ state: state });
  }
  getMoreDetailsState() {
    return this.moreDetails.asObservable();
  }
  toggleBookingEditState(state) {
    this.bookingEdit.next({ state: state });
  }
  getBookingEditState() {
    return this.bookingEdit.asObservable();
  }
  toggleTableAssignState(state) {
    this.tableAssign.next({ state: state });
  }
  getTableAssignState() {
    return this.tableAssign.asObservable();
  }
  toggleLoginState(state) {
    this.login.next({ state: state });
  }
  getLoginState() {
    return this.login.asObservable();
  }
  toggleFloorPackageState(state) {
    this.floorPackage.next({ state: state });
  }
  getFloorPackageState() {
    return this.floorPackage.asObservable();
  }

  toggleTableSelectState(state) {
    this.tableSelect.next({ state: state });
  }
  getTableSelectState() {
    return this.tableSelect.asObservable();
  }

  toggleTableSaveState(state) {
    this.tableSave.next({ state: state });
  }
  getTableSaveState() {
    return this.tableSave.asObservable();
  }
  toggleTableEditState(state) {
    this.tableEdit.next({ state: state });
  }
  getTableEditState() {
    return this.tableEdit.asObservable();
  }
  toggleShiftPackageState(state) {
    this.shiftPackage.next({ state: state });
  }
  getShiftPackageState() {
    return this.shiftPackage.asObservable();
  }
  toggleShiftPackageEditState(state) {
    this.shiftPackageEdit.next({ state: state });
  }
  getShiftPackageEditState() {
    return this.shiftPackageEdit.asObservable();
  }
  toggleRulesState(state) {
    this.rules.next({ state: state });
  }
  getRulesState() {
    return this.rules.asObservable();
  }
  toggleStuffEditState(state) {
    this.stuffEdit.next({ state: state });
  }
  getStuffEditState() {
    return this.stuffEdit.asObservable();
  }
  toggleMobileMenuState(state) {
    this.mobileMenu.next({ state: state });
  }
  getMobileMenuState() {
    return this.mobileMenu.asObservable();
  }
  toggleMobileSortingState(state) {
    this.mobileSorting.next({ state: state });
  }
  getMobileSortingState() {
    return this.mobileSorting.asObservable();
  }
}
