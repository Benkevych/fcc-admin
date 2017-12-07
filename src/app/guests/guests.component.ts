import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeTitle("Guests", "");
    this.header.setPage("guests");
  }

}
