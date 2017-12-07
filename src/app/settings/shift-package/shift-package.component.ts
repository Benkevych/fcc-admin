import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SelectComponent } from "ng2-select/ng2-select";
import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shift-package',
  templateUrl: './shift-package.component.html',
  styleUrls: ['./shift-package.component.scss']
})
export class ShiftPackageComponent implements OnInit {
  shifts: Array<string> = ["Breakfast", "Launch", "Dinner"];
  floors: Array<string> = ['Default Package', 'Weekend Party', 'Centre', 'Side Way', 'Terrace'];
  times: Array<string> = ["30min", "1h 00min", "1h 30min", "2h 00min"];
  shiftPackageState: boolean;
  shiftPackageStateSubscription: Subscription;
  shiftPackageEditState: boolean;
  shiftPackageEditStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.shiftPackageStateSubscription = this.actions.getShiftPackageState().subscribe(obj => { this.shiftPackageState = obj.state });
    this.shiftPackageEditStateSubscription = this.actions.getShiftPackageEditState().subscribe(obj => { this.shiftPackageEditState = obj.state });
  }
  @ViewChildren(SelectComponent) selectElements: QueryList<SelectComponent>;
  // @ViewChildren(DatePickerComponent) dateElements: QueryList<DatePickerComponent>;

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
  public addTime(el) {
    if (el._selected[0])
      console.log(el._selected[0].format('h:mm A'));
  }
}
