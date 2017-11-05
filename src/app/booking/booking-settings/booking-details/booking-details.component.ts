import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  bookingStatusMenu;
  timelineMenu;
  bookingMoreDetails;
  NewBookingMenu;
  moreDetailsDisplayed = false;
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.bookingStatusMenu = document.getElementById("bookingStatusMenu");
    this.timelineMenu = document.getElementById("timelineMenu");
    this.bookingMoreDetails = document.getElementById("moreDetailsView");
    this.NewBookingMenu = document.getElementById("newBooking");

  }
  toggleBookingStatus(action) {
    if (action == "show") {
      this.bookingStatusMenu.style.left = "0";
    } else {
      this.bookingStatusMenu.style.left = "100%";
    }
  }
  toggleBookingSettings(action) {
    if (action == "show") {
      this.timelineMenu.style.display = "block";
    } else {
      this.timelineMenu.style.display = "none";
    }
  }
  toggleNewBookingMenu(action) {
    if (action == "show") {
      this.NewBookingMenu.style.left = "0";
    } else {
      this.NewBookingMenu.style.left = "-100%";
    }
  }
  toggleMoreDetails(event) {
    if (!this.moreDetailsDisplayed) {
      this.bookingMoreDetails.style.display = "block";
      this.moreDetailsDisplayed = true;
      event.target.classList.add('booking-details__button_close');
      event.target.innerText = "Less Details";
    } else {
      this.bookingMoreDetails.style.display = "none";
      this.moreDetailsDisplayed = false;
      event.target.classList.remove('booking-details__button_close');
      event.target.innerText = "More Details";
    }
  }



}
