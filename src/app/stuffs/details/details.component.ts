import { Component, OnInit } from '@angular/core';

import { ActionsService } from '../../actions.service';
@Component({
  selector: 'app-stuffs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class StuffsDetailsComponent implements OnInit {

  constructor(private actions: ActionsService) { }

  ngOnInit() {
  }
  showStaffEdit() {
    this.actions.toggleStuffEditState(true);
  }
}
