import { Component, AfterContentInit, OnDestroy, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Subscription } from 'rxjs/Subscription';
declare var Ext: any;
declare var Sch: any;
var moment = require('moment');
var data = {
  "events": [
    { "Id": "e1", "ResourceId": "t1", "Name": "Katherine Fowler", "Guests": "4", "Color": "#39915D", "Icon": "booked", "StartDate": moment({ hours: '18', minutes: '30' }).toISOString(), "EndDate": moment({ hours: '20', minutes: '00' }).toISOString() },
    { "Id": "e2", "ResourceId": "t5", "Name": "Dennis Edwards", "Guests": "2", "Color": "#3C769D", "Icon": "confirmed", "StartDate": moment({ hours: '19', minutes: '00' }).toISOString(), "EndDate": moment({ hours: '20', minutes: '30' }).toISOString() },
    { "Id": "e3", "ResourceId": "t9", "Name": "Andrea Wheeler", "Guests": "3", "Color": "#A35832", "Icon": "waiting", "StartDate": moment({ hours: '21', minutes: '00' }).toISOString(), "EndDate": moment({ hours: '22', minutes: '30' }).toISOString() },
    { "Id": "e4", "ResourceId": "t24", "Name": "Bobby Wagner", "Guests": "6", "Color": "#5D45A3", "Icon": "seated", "StartDate": moment({ hours: '18', minutes: '15' }).toISOString(), "EndDate": moment({ hours: '19', minutes: '45' }).toISOString() },
    { "Id": "e5", "ResourceId": "t24", "Name": "Thomas Boyd", "Guests": "8", "Color": "#3C769D", "Icon": "booked", "StartDate": moment({ hours: '20', minutes: '30' }).toISOString(), "EndDate": moment({ hours: '22', minutes: '00' }).toISOString() },
    { "Id": "e6", "ResourceId": "t27", "Name": "Sean Allen", "Guests": "2", "Color": "#48943F", "Icon": "check", "StartDate": moment({ hours: '20', minutes: '15' }).toISOString(), "EndDate": moment({ hours: '21', minutes: '45' }).toISOString() },
    { "Id": "e7", "ResourceId": "t35", "Name": "Craig Barrett", "Guests": "7", "Color": "#964444", "Icon": "booked", "StartDate": moment({ hours: '19', minutes: '45' }).toISOString(), "EndDate": moment({ hours: '21', minutes: '15' }).toISOString() },
  ],

  "resources": [
    { "Id": "t1", "Name": "T1", "Category": "Main Lobby", "Seats": "4", "Available": true },
    { "Id": "t5", "Name": "T5", "Category": "Main Lobby", "Seats": "3", "Available": true },
    { "Id": "t9", "Name": "T9", "Category": "Main Lobby", "Seats": "3", "Available": true },
    { "Id": "t10", "Name": "T10", "Category": "Main Lobby", "Seats": "5", "Available": false },
    { "Id": "t23", "Name": "T23", "Category": "Main Lobby", "Seats": "8", "Available": true },
    { "Id": "t24", "Name": "T24", "Category": "Main Lobby", "Seats": "8", "Available": true },
    { "Id": "t26", "Name": "T26", "Category": "Main Lobby", "Seats": "2", "Available": true },
    { "Id": "t27", "Name": "T27", "Category": "Main Lobby", "Seats": "2", "Available": true },
    { "Id": "t30", "Name": "T30", "Category": "Main Lobby", "Seats": "4", "Available": false },
    { "Id": "t32", "Name": "T32", "Category": "Centre Floor", "Seats": "10", "Available": true },
    { "Id": "t35", "Name": "T35", "Category": "Centre Floor", "Seats": "8", "Available": true },
    { "Id": "t36", "Name": "T36", "Category": "Centre Floor", "Seats": "8", "Available": true },
    { "Id": "t37", "Name": "T37", "Category": "Centre Floor", "Seats": "6", "Available": true },
    { "Id": "t38", "Name": "T38", "Category": "Centre Floor", "Seats": "6", "Available": true }
  ]
};

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  scheduler;
  timer;
  schWidth;
  headerHeight;
  bookingSettingsState: boolean;
  bookingSettingsStateSubscription: Subscription;
  constructor(private actions: ActionsService) {
    this.bookingSettingsStateSubscription = this.actions.getBookingSettingsState().subscribe(obj => { this.bookingSettingsState = obj.state });
    if (window.innerWidth < 971) {
      this.schWidth = window.innerWidth;
      this.headerHeight = 56;
    }
    else {
      this.schWidth = window.innerWidth - 74;
      this.headerHeight = 74;
    }
  }

  onResize(event) {
    clearInterval(this.timer);
    this.scheduler.destroy();
    this.renderScheduler();
  }
  ngOnInit() {
    this.renderScheduler();
  }
  showBookingSettings() {
    this.actions.toggleNewBookingState(false);
    this.actions.toggleBookingSettingsState(true);
  }
  showNewBooking(scheduler, clickedDate, rowIndex, resource, e, eOpts) {
    if (resource.get('Available')) {
      this.actions.toggleBookingSettingsState(false);
      this.actions.toggleNewBookingState(true);
    }
  }
  resizeView() {

  }
  ngOnDestroy() {
    clearInterval(this.timer);
    this.scheduler.destroy();
  }
  renderScheduler() {
    if (window.innerWidth < 971)
      this.schWidth = window.innerWidth;
    else
      this.schWidth = window.innerWidth - 74;
    var eventStore = Ext.create('Sch.data.EventStore', {
      model: 'Sch.model.Event',
      proxy: {
        type: 'memory'
      }
    });
    var resourceStore = Ext.create('Sch.data.ResourceStore', {
      type: 'resourcestore',
      groupField: 'Category'
    });
    resourceStore.loadData(data.resources);
    eventStore.proxy.data = data.events;
    eventStore.load();
    Sch.preset.Manager.registerPreset('dayHours', {
      shiftIncrement: 1,
      shiftUnit: 'DAY',
      timeColumnWidth: 200,
      timeResolution: {
        unit: 'MINUTE',
        increment: 15
      },
      headerConfig: {
        middle: {
          unit: 'HOUR',
          renderer: function (start) {
            return moment(start).format("hh A");
          }
        }
      }
    });
    var timeLine = Ext.create('Sch.plugin.CurrentTimeLine', { updateInterval: 1000 });
    this.timer = setInterval(function () {
      if (document.querySelectorAll('.sch-header-indicator')[0])
        document.querySelectorAll('.sch-header-indicator')[0].textContent = new moment().format("hh:mm A");
    }, 1000);
    this.scheduler = null;
    this.scheduler = Ext.create('Sch.panel.SchedulerGrid', {
      width: this.schWidth,
      height: window.innerHeight - this.headerHeight,
      rowHeight: 56,
      sortableColumns: false,
      renderTo: "scheduler",
      viewPreset: 'dayHours',
      eventBodyTemplate: "<div style='background-color:{Color};' class='event'><div style='overflow:hidden'>{Name} | {Guests}</div><div class='icon icon-{Icon}'></div><div class='eventBorder'></div></div>",
      startDate: new Date(new Date().setHours(8)),
      endDate: new Date(new Date().setHours(23)),
      eventResizeHandles: 'none',
      zoomOnTimeAxisDoubleClick: false,
      zoomOnMouseWheel: false,
      readOnly: false,
      plugins: [timeLine,],
      columns: [{
        header: 'Table',
        sortable: false,
        width: 80,
        dataIndex: 'Name'
      },
      {
        header: '#',
        sortable: false,
        width: 60,
        dataIndex: 'Seats'
      }],
      features: [
        {
          id: 'group',
          ftype: 'scheduler_grouping',
          groupHeaderTpl: '{name}',
          hideGroupedHeader: true,
          enableGroupingMenu: false,
        }],
      viewConfig: {
        getRowClass: function (resourceRecord) {
          if (!resourceRecord.get('Available')) {
            return 'blocked';
          }
          return '';
        }
      },
      resourceStore: resourceStore,
      eventStore: eventStore,
    });
    this.scheduler.on('eventclick', this.showBookingSettings.bind(this));
    this.scheduler.on('scheduleclick', this.showNewBooking.bind(this));
    this.scheduler.on('beforeeventdropfinalize', function (dragZone, dragContext, e, eOpts) {
      if (!dragContext.newResource.get("Available")) {
        dragContext.newResource = dragContext.resourceRecord;
        dragContext.startDate = dragContext.origStart;
        dragContext.endDate = dragContext.origEnd;
      }
    });
    this.scheduler.on('beforedragcreate', function () {
      return false;
    });
    Ext.EventManager.on(window, 'resize', this.resizeView);
  }

}


