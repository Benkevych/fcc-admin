import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-floor-package-menu',
  templateUrl: './floor-package-menu.component.html',
  styleUrls: ['./floor-package-menu.component.scss']
})
export class FloorPackageMenuComponent implements OnInit {
  numbers: Array<string> = ["1", "2", "3", "4", "5", "6", "7"];
  seat: Array<string> = ["1", "2", "3", "4", "5", "6"];
  seateble: Array<string> = ["1", "2", "3", "4", "5", "6", "7"];
  confirm = false;
  tconfirm = false;
  floorEdit = false;
  floorPackageState: boolean;
  floorPackageStateSubscription: Subscription;
  tableEditState: boolean;
  tableEditStateSubscription: Subscription;
  selectedTable: any = {};
  tableSelectedStateSubscription: Subscription;

  private tableStyleOptions: any = {
    rect: {
      width: 97,
      height: 97,
      fill: '#596068',
      left: 0,
      top: 0,
      rx: 4,
      ry: 4,
      angle: 45
    },
    circle: {
      radius: 39.5,
      fill: '#596068',
      left: 0,
      top: 0
    }
  };

  constructor(private actions: ActionsService) {
    this.floorPackageStateSubscription = this.actions.getFloorPackageState().subscribe(obj => this.floorPackageState = obj.state);
    this.tableEditStateSubscription = this.actions.getTableEditState().subscribe(obj => this.tableEditState = obj.state);
    this.tableSelectedStateSubscription = this.actions.getTableSelectState().subscribe(obj => this.selectedTable = obj.state);
  }


  ngOnInit() {
  }
  toggleConfirm(action) {
    this.confirm = action == "show";
  }
  tableConfirm() {
    this.confirm = false;
    this.actions.toggleTableEditState(false);
  }
  closeTableEdit() {
    this.floorEdit = false;
    this.actions.toggleTableEditState(false);
  }
  closeFloorPackageSettings() {
    this.actions.toggleFloorPackageState(false);
  }
  showFloorPackageEdit() {
    this.floorEdit = true;
  }
  closeFloorPackageEdit() {
    this.floorEdit = false;
  }

  changeTableNumber(number: any) {
    this.selectedTable.tableObj.id = number.id;
    this.actions.toggleTableSaveState(this.selectedTable);
  }

  changeSeatNumber(number: any) {
    this.selectedTable.tableObj.seats = number.id;
    this.actions.toggleTableSaveState(this.selectedTable);
  }

  changeTableStyle(style: string) {
    let table = this.selectedTable.tableObj;
    table.type = style;
    table.rect = null;
    table.circle = null;
    table[style] = this.tableStyleOptions[style];
    table.scale = (style === 'circle') ? 1.5 : 1;
    this.actions.toggleTableSaveState(this.selectedTable);
  }
}
