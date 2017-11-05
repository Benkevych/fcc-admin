import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showBookingMenu() {
    document.getElementById("timelineMenu").style.display = "block";
  }
  showAddBookingMenu() {
    document.getElementById("NewBookingMenu").style.display = "flex";
  }
}
