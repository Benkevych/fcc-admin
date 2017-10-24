import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-booking-menu',
  templateUrl: './new-booking-menu.component.html',
  styleUrls: ['./new-booking-menu.component.scss']
})
export class NewBookingMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleNewBookingMenu(action) {
    if (action == "show") {
      document.getElementById("NewBookingMenu").style.left = "0";
    }
    else {
      document.getElementById("NewBookingMenu").style.left = "-100%";
    }
  }
}
