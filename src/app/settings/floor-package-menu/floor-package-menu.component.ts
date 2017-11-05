import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-floor-package-menu',
  templateUrl: './floor-package-menu.component.html',
  styleUrls: ['./floor-package-menu.component.scss']
})
export class FloorPackageMenuComponent implements OnInit {
  numbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7"];
  seat: Array<string> = ["1", "2", "3", "4", "5", "6", "7"];
  seateble: Array<string> = ["1", "2", "3", "4", "5", "6", "7"];
  constructor() { }

  ngOnInit() {
  }
  toggleConfirm(action) {
    if (action == "show") {
      document.getElementById("floorMenuTableConfirm").style.display = "flex";
    }
    else {
      document.getElementById("floorMenuTableConfirm").style.display = "none";
    }
  }
  tableConfirm() {
    document.getElementById("floorMenuTableConfirm").style.display = "none";
    document.getElementById("floorMenuTableEdit").style.display = "none";
  }
  closeTableEdit() {
    document.getElementById("floorMenuTableEdit").style.display = "none";
  }
  closeFloorPackageSettings() {
    document.getElementById("floorMenu").style.display = "none";
    document.getElementById("floorPackageView").style.display = "none";
  }
  showFloorPackageEdit() {
    document.getElementById("floorPackageEdit").style.display = "block";
  }
  closeFloorPackageEdit() {
    document.getElementById("floorPackageEdit").style.display = "none";
  }
}
