import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-account',
  templateUrl: './step-account.component.html',
  styleUrls: ['./step-account.component.scss']
})
export class StepAccountComponent implements OnInit {
  state = false;
  constructor() { }

  ngOnInit() {
  }
  showConfirm() {
    this.state = true;
  }

}
