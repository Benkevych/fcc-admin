import { Component, OnInit } from '@angular/core';
var FontFaceObserver = require('fontfaceobserver');
import 'fabric';
declare const fabric: any;


@Component({
  selector: 'app-floor-package',
  templateUrl: './floor-package.component.html',
  styleUrls: ['./floor-package.component.scss']
})


export class FloorPackageComponent implements OnInit {
  floors: Array<string> = ['All Floor', 'Main Lobby', 'Centre Lobby', 'Side Way', 'Terrace'];
  constructor() { }

  ngOnInit() {
    this.drawTables();
  }
  drawTables() {
    var tables = [
      {
        time: null,
        chairs: [{
          left: 21,
          top: -57,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 45,
          opacity: 0.60
        }, {
          left: -57,
          top: -21,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: -45,
          opacity: 0.60
        }],
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
          text: "T32",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 100,
        top: 218,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: 21,
          top: -57,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 45,
          opacity: 0.60
        }, {
          left: -57,
          top: -21,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: -45,
          opacity: 0.60
        }],
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
          text: "T40  ",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 100,
        top: 430,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: 21,
          top: -57,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 45,
          opacity: 0.60
        }, {
          left: -57,
          top: -21,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: -45,
          opacity: 0.60
        }],
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
        left: 708,
        top: 218,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: 21,
          top: -57,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 45,
          opacity: 0.60
        }, {
          left: -57,
          top: -21,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: -45,
          opacity: 0.60
        }],
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
        left: 708,
        top: 430,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -32,
          top: 32,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
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
        left: 306,
        top: 335,
        scale: 1.5,
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
        chairs: [{
          left: -32,
          top: 32,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#596068',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
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
        left: 516,
        top: 335,
        scale: 1.5,
        angle: 0
      }
    ];
    var myfont = new FontFaceObserver("Heebo");
    myfont.load().then(function () {
      var floor = new fabric.Canvas('floorPackageCanvas');
      floor.setDimensions({ width: "950", height: "950" });
      var tableGroups = tables.map(table => {
        var chairs = table.chairs.map(chair => {
          return new fabric.Rect({
            left: chair.left * table.scale,
            top: chair.top * table.scale,
            fill: chair.fill,
            width: chair.width,
            height: chair.height,
            rx: chair.rx,
            ry: chair.ry,
            angle: chair.angle,
            opacity: chair.opacity,
            scaleX: table.scale,
            scaleY: table.scale
          });
        });
        var text = new fabric.Text(table.name.text, {
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
          group.add(text);
        }
        if (table.rect) {
          var rect = new fabric.Rect({
            left: table.rect.left,
            top: table.rect.top,
            fill: table.rect.fill,
            width: table.rect.width,
            height: table.rect.height,
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
        chairs.forEach(chair => { group.insertAt(chair, 0) });
        group.hasControls = false;
        group.hoverCursor = "pointer";
        group.hasBorders = false;
        group.on('selected', function () {
          document.getElementById("floorMenuTableEdit").style.display = "flex";
          group.forEachObject(function (obj) {
            if (obj.type !== "text" && obj.type !== "group") {
              obj.setColor("#238C9F");
            }
          });
        });
        group.on('deselected', function () {
          document.getElementById("floorMenuTableEdit").style.display = "none";
          group.forEachObject(function (obj) {
            if (obj.type !== "text" && obj.type !== "group") {
              obj.setColor("#585F68");
            }
          });
        });
        return group;
      });
      tableGroups.forEach(group => { floor.add(group); });
    });
  }
}
