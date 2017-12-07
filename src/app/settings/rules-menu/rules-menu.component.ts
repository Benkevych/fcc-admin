import { Component, OnInit } from '@angular/core';

import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-rules-menu',
  templateUrl: './rules-menu.component.html',
  styleUrls: ['./rules-menu.component.scss']
})
export class RulesMenuComponent implements OnInit {
  rulesState: boolean;
  rulesItemState: boolean = false;
  rulesStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.rulesStateSubscription = this.actions.getRulesState().subscribe(obj => { this.rulesState = obj.state });
  }
  ngOnInit() {
  }
  closeRulesSettings() {
    this.actions.toggleRulesState(false);
  }
  showRulesItem() {
    this.rulesItemState = true;

  }
  closeRulesEdit() {
    this.rulesItemState = false;
  }
}
