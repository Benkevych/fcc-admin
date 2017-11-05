import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuffs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class StuffsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showStaffEdit() {
    document.getElementById("staffEdit").style.display = "flex";
  }
}
