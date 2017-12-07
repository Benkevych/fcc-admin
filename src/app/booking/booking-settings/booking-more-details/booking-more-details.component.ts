import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { ActionsService } from '../../../actions.service';


@Component({
  selector: 'app-booking-more-details',
  templateUrl: './booking-more-details.component.html',
  styleUrls: ['./booking-more-details.component.scss']
})
export class BookingMoreDetailsComponent implements OnInit {
  displayedColumns;
  dataSource;
  moreDetailsState = false;
  moreDetailsStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.moreDetailsStateSubscription = this.actions.getMoreDetailsState().subscribe(obj => { this.moreDetailsState = obj.state; });
  }
  ngOnInit() {
    this.displayedColumns = ['id', 'date', 'time', 'guests', 'status', 'link'];
    this.dataSource = new ExampleDataSource();
  }
  showEditMenu() {
    this.actions.toggleBookingEditState(true);
  }
  closeMoreDetails() {
    this.actions.toggleMoreDetailsState(false);
  }


}
export interface Element {
  id: string;
  date: string;
  time: string;
  guests: number;
  status: string;
  link: string;
}

const data: Element[] = [
  { id: "TPR93783", date: "Monday, Jul 8, 2017", time: "06:30 PM", guests: 4, status: "Finish", link: "#" },
  { id: "TPR26505", date: "Saturday, Apr 5, 2017", time: "08:00 PM", guests: 7, status: "Finish", link: "#" },
  { id: "TPR09345", date: "Sunday, Mar 20, 2017", time: "07:45 PM", guests: 2, status: "Finish", link: "#" },
  { id: "TPR93783", date: "Monday, Jul 8, 2017", time: "06:30 PM", guests: 4, status: "Finish", link: "#" },
  { id: "TPR26505", date: "Saturday, Apr 5, 2017", time: "08:00 PM", guests: 7, status: "Finish", link: "#" },
  { id: "TPR09345", date: "Sunday, Mar 20, 2017", time: "07:45 PM", guests: 2, status: "Finish", link: "#" },
  { id: "TPR93783", date: "Monday, Jul 8, 2017", time: "06:30 PM", guests: 4, status: "Finish", link: "#" },
  { id: "TPR26505", date: "Saturday, Apr 5, 2017", time: "08:00 PM", guests: 7, status: "Finish", link: "#" },
  { id: "TPR00000", date: "Sunday, Mar 20, 2017", time: "07:45 PM", guests: 2, status: "Finish", link: "#" },
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
