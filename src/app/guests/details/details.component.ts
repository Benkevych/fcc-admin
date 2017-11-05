import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-guests-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class GuestsDetailsComponent implements OnInit {
  displayedColumns;
  dataSource;
  bookingEditMenu;
  constructor() { }
  ngOnInit() {
    this.displayedColumns = ['id', 'date', 'time', 'guests', 'status', 'link'];
    this.dataSource = new ExampleDataSource();
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
];




export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
