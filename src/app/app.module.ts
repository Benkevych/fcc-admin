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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
