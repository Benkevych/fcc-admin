import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-stuffs-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class StuffsEditComponent implements OnInit {
  roles: Array<string> = ["Waiter", "Admin", "God"];
  stuffEditState: boolean = false;
  stuffEditStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.stuffEditStateSubscription = this.actions.getStuffEditState().subscribe(obj => { this.stuffEditState = obj.state });
  }

  ngOnInit() {
  }
  hideStaffEdit() {
    this.actions.toggleStuffEditState(false);
  }

}
