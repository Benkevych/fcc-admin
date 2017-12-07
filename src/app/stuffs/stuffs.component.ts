import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.scss']
})
export class StuffsComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeTitle("Stuffs", "");
    this.header.setPage("stuffs");
  }

}
