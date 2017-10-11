import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { BookingSettingsComponent } from './booking/booking-settings/booking-settings.component';
import { TimelineComponent } from './booking/timeline/timeline.component';
import { FloorsComponent } from './booking/floors/floors.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestsListComponent } from './guests/list/list.component';
import { GuestsDetailsComponent } from './guests/details/details.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { StuffsListComponent } from './stuffs/list/list.component';
import { StuffsDetailsComponent } from './stuffs/details/details.component';
import { StuffsEditComponent } from './stuffs/edit/edit.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SettingsListComponent } from './settings/settings-list/settings-list.component';
import { GeneralComponent } from './settings/general/general.component';
import { RulesComponent } from './settings/rules/rules.component';
import { ShiftPackageComponent } from './settings/shift-package/shift-package.component';
import { FloorPackageComponent } from './settings/floor-package/floor-package.component';
import { BookingStatusComponent } from './booking/booking-settings/booking-status/booking-status.component';
import { BookingDetailsComponent } from './booking/booking-settings/booking-details/booking-details.component';
import { BookingEditComponent } from './booking/booking-settings/booking-edit/booking-edit.component';
import { BookingMoreDetailsComponent } from './booking/booking-settings/booking-more-details/booking-more-details.component';
import { BookingAddComponent } from './booking/booking-settings/booking-add/booking-add.component';
import { StepDateComponent } from './booking/booking-settings/booking-add/step-date/step-date.component';
import { StepGuestsComponent } from './booking/booking-settings/booking-add/step-guests/step-guests.component';
import { StepTimeComponent } from './booking/booking-settings/booking-add/step-time/step-time.component';
import { StepAccountComponent } from './booking/booking-settings/booking-add/step-account/step-account.component';
import { StepConfirmComponent } from './booking/booking-settings/booking-add/step-confirm/step-confirm.component';
import { BookingListComponent } from './booking/booking-settings/booking-list/booking-list.component';
import { BookingStuffsListComponent } from './booking/booking-settings/booking-stuffs-list/booking-stuffs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BookingComponent,
    BookingSettingsComponent,
    TimelineComponent,
    FloorsComponent,
    GuestsComponent,
    GuestsListComponent,
    GuestsDetailsComponent,
    StuffsComponent,
    StuffsListComponent,
    StuffsDetailsComponent,
    StuffsEditComponent,
    SettingsComponent,
    LoginComponent,
    SettingsListComponent,
    GeneralComponent,
    RulesComponent,
    ShiftPackageComponent,
    FloorPackageComponent,
    BookingStatusComponent,
    BookingDetailsComponent,
    BookingEditComponent,
    BookingMoreDetailsComponent,
    BookingAddComponent,
    StepDateComponent,
    StepGuestsComponent,
    StepTimeComponent,
    StepAccountComponent,
    StepConfirmComponent,
    BookingListComponent,
    BookingStuffsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
