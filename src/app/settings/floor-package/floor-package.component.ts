import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
var FontFaceObserver = require('fontfaceobserver');
import { ActionsService } from '../../actions.service';
import { Subscription } from 'rxjs/Subscription';
import 'fabric';
declare const fabric: any;


@Component({
  selector: 'app-floor-package',
  templateUrl: './floor-package.component.html',
  styleUrls: ['./floor-package.component.scss']
})


export class FloorPackageComponent implements OnInit {
  floors: Array<string> = ['All Floor', 'Main Lobby', 'Centre Lobby', 'Side Way', 'Terrace'];
  fabricCanvas: any = {};
  floorsTables: any = {};
  activeFloor: any = {};
  floorPackageState: boolean;
  floorPackageStateSubscription: Subscription;
  tableSaveSubscription: Subscription;

  selectedTable: any = {};

  lastId: number = 1;

  private chairOptions: any = {
    bigrect: {
      "top-right": {
        type: "top-right",
        left: 42,
        top: -75,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: 45,
        opacity: 0.60
      },
      "top-left-1": {
        type: "top-left-1",
        left: -42,
        top: -42,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "top-left-2": {
        type: "top-left-2",
        left: -84,
        top: 0,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "bottom-right-1": {
        type: "bottom-right-1",
        left: 10,
        top: 5,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "bottom-right-2": {
        type: "bottom-right-2",
        left: -34,
        top: 50,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "bottom-left": {
        type: "bottom-left",
        left: -78,
        top: 42,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }
    },
    rect: {
      "top-right": {
        type: "top-right",
        left: 21,
        top: -57,
        fill: '#596068',
        width: 47,
        height: 100,
        rx: 4,
        ry: 4,
        angle: 45,
        opacity: 0.60
      },
      "top-left": {
        type: "top-left",
        left: -57,
        top: -21,
        fill: '#596068',
        width: 47,
        height: 100,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "bottom-right": {
        type: "bottom-right",
        left: -48,
        top: -15,
        fill: '#596068',
        width: 47,
        height: 100,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }, 
      "bottom-left": {
        type: "bottom-left",
        left: -57,
        top: 24,
        fill: '#596068',
        width: 47,
        height: 47,
        rx: 4,
        ry: 4,
        angle: -45,
        opacity: 0.60
      }
    },
    circle: {
      "top-right": {
        type: "top-right",
        left: 0,
        top: -22,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: -60,
        opacity: 0.60
      },
      "top-left": {
        type: "top-left",
        left: -13,
        top: -44,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: 60,
        opacity: 0.60
      },
      "bottom-right": {
        type: "bottom-right",
        left: 23,
        top: 10,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: 60,
        opacity: 0.60
      }, 
      "left": {
        type: "left",
        left: -44,
        top: -12,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: 0,
        opacity: 0.60
      },
      "bottom-left": {
        type: "bottom-left",
        left: -21,
        top: 11,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: 30,
        opacity: 0.60
      },
      "right": {
        type: "right",
        left: 20,
        top: -12,
        fill: '#596068',
        width: 24,
        height: 24,
        rx: 4,
        ry: 4,
        angle: 0,
        opacity: 0.60
      }
    }
  }
  private seatRectPositions: Array<string> = ["top-right", "top-left", "bottom-right", "bottom-left"];
  private seatCirclePositions: Array<string> = ["top-right", "top-left", "bottom-right", "bottom-left", "left", "right"];
  private seatBigrectPositions: Array<string> = ["top-right", "top-left-1", "top-left-2", "bottom-right-1", "bottom-right-2", "bottom-left"];

  constructor(private actions: ActionsService) {
    this.floorPackageStateSubscription = this.actions.getFloorPackageState().subscribe(obj => this.floorPackageState = obj.state); 
    this.tableSaveSubscription = this.actions.getTableSaveState().subscribe(obj => {
      let table = obj.state;
      let floor = this.floorsTables[this.activeFloor.id];
      let index = floor.indexOf(this.selectedTable);
      floor[index] = this.createTable(table.tableObj);
      this.initTables();
      let objs = this.fabricCanvas.getObjects();
      this.fabricCanvas.setActiveObject(objs[index]);
    });
    this.activeFloor = {
      id: this.floors[0],
      text: this.floors[0]
    };
  }



  ngOnInit() {
    var myfont = new FontFaceObserver("Heebo");
    myfont.load().then(this.drawTables());
  }
  drawTables() {
    var tables = [
      {
        time: null,
        circle: null,
        type: 'rect',
        rect: {
          width: 97,
          height: 97,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 4,
          ry: 4,
          angle: 45
        },
        name: {
          text: "T32",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 10,
        top: 40,
        scale: 1,
        seats: 4,
        angle: 0
      },
      {
        time: null,
        circle: null,
        type: 'rect',
        rect: {
          width: 97,
          height: 97,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 4,
          ry: 4,
          angle: 45
        },
        name: {
          text: "T40  ",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 10,
        top: 212,
        scale: 1,
        seats: 4,
        angle: 0
      },
      {
        time: null,
        type: 'rect',
        circle: null,
        rect: {
          width: 97,
          height: 97,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 4,
          ry: 4,
          angle: 45
        },
        name: {
          text: "T37",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 426,
        top: 40,
        scale: 1,
        seats: 4,
        angle: 0
      },
      {
        time: null,
        type: 'rect',
        circle: null,
        rect: {
          width: 97,
          height: 97,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 4,
          ry: 4,
          angle: 45
        },
        name: {
          text: "T38",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 426,
        top: 212,
        scale: 1,
        seats: 4,
        angle: 0
      },
      {
        time: null,
        type: 'circle',
        circle: {
          radius: 39.5,
          fill: '#596068',
          left: 0,
          top: 0
        },
        rect: null,
        name: {
          text: "T35",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 155,
        top: 137,
        scale: 1.5,
        seats: 6,
        angle: 0
      },
      {
        time: {
          rect: {
            left: -39,
            top: 35,
            fill: '#1A1D22',
            width: 78,
            height: 28,
            rx: 3,
            ry: 3,
            angle: 0,
            opacity: 1
          },
          text: {
            value: "06:15 PM",
            fontFamily: 'Heebo',
            fontSize: 12,
            fill: "#D8DEE8",
            top: 43,
            left: -25
          }
        },
        type: 'circle',
        circle: {
          radius: 39.5,
          fill: '#596068',
          left: 0,
          top: 0
        },
        rect: null,
        name: {
          text: "T36",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 308,
        top: 137,
        scale: 1.5,
        seats: 6,
        angle: 0
      }
    ];

    this.fabricCanvas = new fabric.Canvas('floorPackageCanvas');
    this.fabricCanvas.setDimensions({ width: "950", height: "950" });

    this.floors.forEach(floor => {
      if (this.lastId === 7) this.lastId = 1;
      this.floorsTables[floor] = tables.map(table => this.createTable(table));
    });
    this.initTables();
  }

  createTable(table: any) {

    var id = table.id || this.lastId++;
    var text = new fabric.Text("T" + id, {
      fontFamily: table.name.fontFamily,
      fontSize: table.name.fontSize,
      fill: table.name.fill
    });
    if (table.circle) {
      var circle = new fabric.Circle({
        radius: table.circle.radius,
        fill: table.circle.fill,
        left: table.circle.left,
        top: table.circle.top,
        scaleX: table.scale,
        scaleY: table.scale
      });
      var group = new fabric.Group([circle], { top: table.top, left: table.left, angle: table.angle });
      text.top = 0 - (text.height / 2);
      text.left = 0 - (text.width / 2);
      for (let i = 0; i < table.seats; i++) {
        let chair = { ...this.chairOptions.circle[this.seatCirclePositions[i]] };
        chair.left = table.scale * chair.left;
        chair.top = table.scale * chair.top;
        chair.scaleX = table.scale;
        chair.scaleY = table.scale;
        group.insertAt(new fabric.Rect(chair), 0);
      }
      group.add(text);
    }
    if (table.rect) {
      var rect = new fabric.Rect({
        left: table.rect.left,
        top: table.rect.top,
        fill: table.rect.fill,
        width: table.rect.width,
        height: table.rect.height * (table.seats > 4 ? 1.5 : 1),
        rx: table.rect.rx,
        ry: table.rect.ry,
        angle: table.rect.angle,
        scaleX: table.scale,
        scaleY: table.scale
      });
      var group = new fabric.Group([rect], { top: table.top, left: table.left, angle: table.angle });
      text.top = 0 - (text.height / 2);
      text.left = 0 - (text.width / 2);
      group.add(text);
      for (let i = 0; i < table.seats; i++) {
        var chair: any = {};

        if (table.seats <= 4) {
          chair = { ...this.chairOptions.rect[this.seatRectPositions[i]] };
        } else {
          chair = { ...this.chairOptions.bigrect[this.seatBigrectPositions[i]] };
        }
        
        chair.left = table.scale * chair.left;
        chair.top = table.scale * chair.top;
        chair.scaleX = table.scale;
        chair.scaleY = table.scale;
        group.insertAt(new fabric.Rect(chair), 0);
      }
    }
    if (table.time) {
      var timerect = new fabric.Rect({
        left: table.time.rect.left,
        top: table.time.rect.top,
        fill: table.time.rect.fill,
        width: table.time.rect.width,
        height: table.time.rect.height,
        rx: table.time.rect.rx,
        ry: table.time.rect.ry,
        angle: table.time.rect.angle,
        opacity: table.time.rect.opacity
      });
      var timetext = new fabric.Text(table.time.text.value, {
        fontFamily: table.time.text.fontFamily,
        fontSize: table.time.text.fontSize,
        fill: table.time.text.fill
      });
      var time = new fabric.Group([timerect], { top: group.height / 2 - timerect.height / 2, left: 0 - timerect.width / 2 });
      timetext.top = 0 - timetext.height / 2;
      timetext.left = 0 - timetext.width / 2;
      time.add(timetext);
      group.add(time);
    }
    group.name = "T" + id;
    group.hasControls = true;
    group.hoverCursor = "pointer";
    group.hasBorders = true;
    group.on('selected', this.tableSelect.bind(this, group));
    group.on('deselected', this.tableDeselect.bind(this, group));
    group.on('moving', this.tableMoving.bind(this, group));
    group.id = id;
    group.type = table.type;
    if (!table.id) table.id = id;
    group.tableObj = table;
    group.seats = table.seats;

    return group;
  }
  initTables() {
    var tableGroups = this.floorsTables[this.activeFloor.id];
    this.fabricCanvas.clear();
    tableGroups.forEach(group => { this.fabricCanvas.add(group); });
  }
  tableMoving(group) {
    group.tableObj.top = group.top;
    group.tableObj.left = group.left;
  }
  tableSelect(group) {
    this.actions.toggleTableEditState(true);
    group.forEachObject(function (obj) {
      if (obj.type !== "text" && obj.type !== "group") {
        obj.setColor("#238C9F");
      }
    });
    this.selectedTable = group;
    this.actions.toggleTableSelectState(this.selectedTable);
  }
  tableDeselect(group) {
    this.actions.toggleTableEditState(false);
    group.forEachObject(function (obj) {
      if (obj.type !== "text" && obj.type !== "group") {
        obj.setColor("#585F68");
      }
    });
    this.selectedTable = {};
    this.actions.toggleTableSelectState(this.selectedTable);
  }
  floorChange(floor) {
    this.activeFloor = floor;
    this.initTables();
  }
  addTable() {
    let tables = this.floorsTables[this.activeFloor.id];

    if (tables.length === 7) return false;

    tables.push(this.createTable({
      time: null,
      circle: null,
      type: 'rect',
      rect: {
        width: 97,
        height: 97,
        fill: '#596068',
        left: 0,
        top: 0,
        rx: 4,
        ry: 4,
        angle: 45
      },
      name: {
        text: "T" + tables.length + 1,
        fontFamily: 'Heebo',
        fontSize: 16,
        fill: "#D8DEE8"
      },
      left: 0,
      top: 0,
      scale: 1,
      angle: 0,
      seats: 4,
      id: tables.length + 1
    }));
    this.initTables();
  }
  removeTable() {
    if (!this.selectedTable) return false;
    let floor = this.floorsTables[this.activeFloor.id];
    floor.splice(floor.indexOf(this.selectedTable), 1);
    this.initTables();
  }

  redrawTables(table: any) {
    this.selectedTable = table;
    this.initTables();
  }
}
