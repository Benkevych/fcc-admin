import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuffs-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class StuffsEditComponent implements OnInit {
  roles: Array<string> = ["Waiter", "Admin", "God"];
  constructor() { }

  ngOnInit() {
  }
  hideStaffEdit() {
    document.getElementById("staffEdit").style.display = "none";
  }

}
