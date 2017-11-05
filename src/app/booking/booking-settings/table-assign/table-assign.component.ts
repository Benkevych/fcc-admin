import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-assign',
  templateUrl: './table-assign.component.html',
  styleUrls: ['./table-assign.component.scss']
})
export class TableAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleTableAssignMenu(action) {
    if (action == "hide") {
      document.getElementById("tableAssignMenu").style.display = "none";
    }
    else {
      document.getElementById("tableAssignMenu").style.display = "block";
    }
  }

}
