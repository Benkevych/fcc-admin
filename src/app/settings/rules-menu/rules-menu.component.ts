import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules-menu',
  templateUrl: './rules-menu.component.html',
  styleUrls: ['./rules-menu.component.scss']
})
export class RulesMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  closeRulesSettings() {
    document.getElementById("rulesMenu").style.display = "none";
    document.getElementById("rulesView").style.display = "none";
  }
  showRulesItem() {
    document.getElementById("rulesItem").style.display = "flex";

  }
  closeRulesEdit() {
    document.getElementById("rulesItem").style.display = "none";
  }
}
