import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-table-assign',
  templateUrl: './table-assign.component.html',
  styleUrls: ['./table-assign.component.scss']
})
export class TableAssignComponent implements OnInit {
  tableAssignState = false;
  tableAssignStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.tableAssignStateSubscription = this.actions.getTableAssignState().subscribe(obj => { this.tableAssignState = obj.state });
  }

  ngOnInit() {
  }

  closeTableAssignMenu() {
    this.actions.toggleTableAssignState(false);
  }

}
