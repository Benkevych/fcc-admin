import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-confirm',
  templateUrl: './step-confirm.component.html',
  styleUrls: ['./step-confirm.component.scss']
})
export class StepConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closeAddBooking() {
    document.getElementById("addBooking").style.display = "none";
  }
}
