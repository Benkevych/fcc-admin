import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { GuestsComponent } from './guests/guests.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Routes = [
  { path: "booking", component: BookingComponent },
  { path: "guests", component: GuestsComponent },
  { path: "stuffs", component: StuffsComponent },
  { path: "settings", component: SettingsComponent }
];
