import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mobileMenuState: boolean = false;
  mobileMenuSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.mobileMenuSubscription = this.actions.getMobileMenuState().subscribe(obj => { this.mobileMenuState = obj.state });
  }

  ngOnInit() {
  }
  showLogin() {
    this.actions.toggleLoginState(true);
  }
  closeMenu() {
    this.actions.toggleMobileMenuState(false);
  }
  onResize(event) {
    if (event.target.innerWidth > 971) {
      this.actions.toggleMobileMenuState(true);
      this.actions.toggleMobileSortingState(true);
    } else {
      this.actions.toggleMobileMenuState(false);
      this.actions.toggleMobileSortingState(false);
    }
  }
}
