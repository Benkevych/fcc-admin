import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shift-package-menu',
  templateUrl: './shift-package-menu.component.html',
  styleUrls: ['./shift-package-menu.component.scss']
})
export class ShiftPackageMenuComponent implements OnInit {
  shiftPackageState: boolean;
  shiftPackageStateSubscription: Subscription;
  shiftPackageEditState: boolean;
  shiftPackageEditStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.shiftPackageStateSubscription = this.actions.getShiftPackageState().subscribe(obj => { this.shiftPackageState = obj.state });
    this.shiftPackageEditStateSubscription = this.actions.getShiftPackageEditState().subscribe(obj => { this.shiftPackageEditState = obj.state });
  }

  ngOnInit() {
  }
  showShiftEdit() {
    this.actions.toggleShiftPackageEditState(true);
  }
  closeShiftEdit() {
    this.actions.toggleShiftPackageEditState(false);
  }
  closeShiftPackageSettings() {
    this.actions.toggleShiftPackageState(false);
  }
}
