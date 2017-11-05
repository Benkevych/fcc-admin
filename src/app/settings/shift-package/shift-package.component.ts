import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-package',
  templateUrl: './shift-package.component.html',
  styleUrls: ['./shift-package.component.scss']
})
export class ShiftPackageComponent implements OnInit {
  shifts: Array<string> = ["Breakfast", "Launch", "Dinner"];
  floors: Array<string> = ['Default Package', 'Weekend Party', 'Centre', 'Side Way', 'Terrace'];
  times: Array<string> = ["30min", "1h 00min", "1h 30min", "2h 00min"];
  deposits: Array<string> = ["100 RMB", "200 RMB", "500 RMB", "1000 RMB"];
  constructor() { }

  ngOnInit() {
  }

}
