import { Component, OnInit } from '@angular/core';

import { ActionsService } from '../../actions.service';
@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor(private actions: ActionsService) { }

  ngOnInit() {
  }
  showFloorPackageSettings() {
    this.actions.toggleFloorPackageState(true);
  }
  showShiftPackageSettings() {
    this.actions.toggleShiftPackageState(true);
  }
  showRulesSettings() {
    this.actions.toggleRulesState(true);
  }
}
