import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showFloorPackageSettings() {
    document.getElementById("floorMenu").style.display = "flex";
    document.getElementById("floorPackageView").style.display = "flex";
  }
  showShiftPackageSettings() {
    document.getElementById("shiftMenu").style.display = "flex";
    document.getElementById("shiftView").style.display = "flex";
  }
  showRulesSettings() {
    document.getElementById("rulesMenu").style.display = "flex";
    document.getElementById("rulesView").style.display = "flex";
  }
}
