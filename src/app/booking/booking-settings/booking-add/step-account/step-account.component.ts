import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-account',
  templateUrl: './step-account.component.html',
  styleUrls: ['./step-account.component.scss']
})
export class StepAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showConfirm() {
    document.getElementById("bookingConfirm").style.display = "block";
  }
}
