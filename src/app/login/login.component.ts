import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginState: boolean;
  loginStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.loginStateSubscription = this.actions.getLoginState().subscribe(obj => { this.loginState = obj.state });
  }

  ngOnInit() {
  }
  closeLogin() {
    this.actions.toggleLoginState(false);
  }
}
