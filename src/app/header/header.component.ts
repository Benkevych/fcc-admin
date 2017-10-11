import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  subtitle: string;
  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.title = this.app.title;
    this.subtitle = this.app.subtitle;
  }

}
