import { Component, OnInit } from '@angular/core';
import 'fabric';
declare const fabric: any;
var FontFaceObserver = require('fontfaceobserver');

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawTables();

  }
  drawTables() {
    var tables = [
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
          text: "T1",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 65,
        top: 90,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -32,
          top: 32,
          fill: '#39915D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#39915D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#39915D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: {
          radius: 39.5,
          fill: '#39915D',
          left: 0,
          top: 0
        },
        rect: null,
        name: {
          text: "T5",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 213,
        top: 90,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -32,
          top: 32,
          fill: '#3C769D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#3C769D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#3C769D',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: {
          radius: 39.5,
          fill: '#3C769D',
          left: 0,
          top: 0
        },
        rect: null,
        name: {
          text: "T9",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 360,
        top: 90,
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
          text: "T10",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 508,
        top: 90,
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
          text: "T23",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 656,
        top: 90,
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
          text: "T24",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 804,
        top: 90,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -32,
          top: 32,
          fill: '#5D45A3',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#5D45A3',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#5D45A3',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: {
          radius: 39.5,
          fill: '#5D45A3',
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
        top: 615,
        scale: 1.4,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -32,
          top: 32,
          fill: '#48943F',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: -60,
          opacity: 0.60
        }, {
          left: -12,
          top: -44,
          fill: '#48943F',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 60,
          opacity: 0.60
        }, {
          left: -44,
          top: -12,
          fill: '#48943F',
          width: 87,
          height: 24,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: {
          radius: 39.5,
          fill: '#48943F',
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
        top: 615,
        scale: 1.4,
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
          left: -58,
          top: -56,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }, {
          left: 8,
          top: -56,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: null,
        rect: {
          width: 160,
          height: 96,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 10,
          ry: 10,
          angle: 0
        },
        name: {
          text: "T26",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 171,
        top: 282,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -58,
          top: -56,
          fill: '#A35832',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }, {
          left: 8,
          top: -56,
          fill: '#A35832',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: null,
        rect: {
          width: 160,
          height: 96,
          fill: '#A35832',
          left: 0,
          top: 0,
          rx: 10,
          ry: 10,
          angle: 0
        },
        name: {
          text: "T26",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 391,
        top: 282,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: -58,
          top: -56,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }, {
          left: 8,
          top: -56,
          fill: '#596068',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 0,
          opacity: 0.60
        }],
        circle: null,
        rect: {
          width: 160,
          height: 96,
          fill: '#596068',
          left: 0,
          top: 0,
          rx: 10,
          ry: 10,
          angle: 0
        },
        name: {
          text: "T30",
          fontFamily: 'Heebo',
          fontSize: 16,
          fill: "#D8DEE8"
        },
        left: 620,
        top: 282,
        scale: 1,
        angle: 0
      },
      {
        time: null,
        chairs: [{
          left: 21,
          top: -57,
          fill: '#3C769D',
          width: 47,
          height: 110,
          rx: 4,
          ry: 4,
          angle: 45,
          opacity: 0.60
        }, {
          left: -57,
          top: -21,
          fill: '#3C769D',
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
          fill: '#3C769D',
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
        top: 498,
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
        top: 710,
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
        top: 710,
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
        top: 498,
        scale: 1,
        angle: 0
      }
    ];
    var myfont = new FontFaceObserver("Heebo");
    myfont.load().then(function () {
      var floor = new fabric.Canvas('floorViewCanvas', { isTouchSupported: true, selection: false });
      console.log(floor.isTouchSupported);
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
            opacity: table.rect.opacity,
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
        var chairsgroup = new fabric.Group([], { top: 0, left: 0 });
        chairs.forEach(chair => { chairsgroup.insertAt(chair, 0) });
        group.insertAt(chairsgroup, 0);
        group.lockMovementX = true;
        group.lockMovementY = true;
        group.hasControls = false;
        group.hoverCursor = "pointer";
        group.hasBorders = false;
        group.on('selected', function () {
          document.getElementById("tableAssignMenu").style.display = "block";
          var index = 0;
          if (group._objects.length)
            group._objects[index].stroke = "#BEC4CD";
          group._objects[index].strokeWidth = 5;

          group._objects[index].top -= 5 / 2;
          group.dirty = true;
          floor.renderAll();
        });
        group.on('deselected', function () {
          document.getElementById("tableAssignMenu").style.display = "none";
        });
        return group;
      });
      tableGroups.forEach(group => { floor.add(group); });
    });
  }
}
