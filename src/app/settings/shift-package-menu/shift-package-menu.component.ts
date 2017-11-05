import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-package-menu',
  templateUrl: './shift-package-menu.component.html',
  styleUrls: ['./shift-package-menu.component.scss']
})
export class ShiftPackageMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showShiftEdit() {
    document.getElementById("shiftEditMenu").style.display = "flex";
    document.getElementById("shiftEdit").style.display = "flex";
  }
  closeShiftEdit() {
    document.getElementById("shiftEditMenu").style.display = "none";
    document.getElementById("shiftEdit").style.display = "none";
  }
  closeShiftPackageSettings() {
    document.getElementById("shiftMenu").style.display = "none";
    document.getElementById("shiftView").style.display = "none";
  }
}
