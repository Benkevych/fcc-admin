import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { SelectComponent } from "ng2-select/ng2-select";
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  timers: Array<string> = ["1 Min", "2 Mins", "5 Mins", "10 Mins", "15 Mins"];
  minGuests: Array<string> = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests"];
  maxGuests: Array<string> = ["10 Guests", "15 Guests", "20 Guests", "100 Guests"];
  daysAllowed: Array<string> = ["7 Days", "30 Days", "60 Days", "90 Days"];
  constructor() { }
  @ViewChildren(SelectComponent) selectElements: QueryList<SelectComponent>;

  public closeOtherSelects(element) {
    if (element.optionsOpened == true) {
      let elementsToclose = this.selectElements.filter(function (el: any) {
        return (el != element && el.optionsOpened == true)
      });
      elementsToclose.forEach(function (e: SelectComponent) {
        e.clickedOutside();
      })
    }
  }
  ngOnInit() {
  }

}
