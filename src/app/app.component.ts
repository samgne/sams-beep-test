import { Component } from '@angular/core';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";


const LEVELS: Level[] = [
 { id: 1, time: 9000, shuttles: 7 },
 { id: 2, time: 8000, shuttles: 8 },
 { id: 3, time: 7580, shuttles: 8 },
 { id: 4, time: 7200, shuttles: 9 },
 { id: 5, time: 6860, shuttles: 9 },
 { id: 6, time: 6550, shuttles: 10 },
 { id: 7, time: 6260, shuttles: 10 },
 { id: 8, time: 6000, shuttles: 11 },
 { id: 9, time: 5760, shuttles: 11 },
 { id: 10, time: 5540, shuttles: 11 },
 { id: 11, time: 5330, shuttles: 12 },
 { id: 12, time: 5140, shuttles: 12 },
 { id: 13, time: 4970, shuttles: 13 },
 { id: 14, time: 4800, shuttles: 13 },
 { id: 15, time: 4650, shuttles: 13 },
 { id: 16, time: 4500, shuttles: 14 },
 { id: 17, time: 4360, shuttles: 14 },
 { id: 18, time: 4240, shuttles: 15 },
 { id: 19, time: 4110, shuttles: 15 },
 { id: 20, time: 4000, shuttles: 16 },
 { id: 21, time: 3890, shuttles: 16 }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  text: any = { Seconds: "Seconds", MilliSeconds:"MilliSeconds" };
  private currentLevel = 0; 
  title = 'Sams Beep Test!';
  todayDate = new Date();

  levels = LEVELS;

  beepStart() {
    console.log("start pressed");
    this.currentLevel++;
    this.levelRun(this.currentLevel);
  }

  levelRun(level) {
   var levelTime = this.levels[this.currentLevel].time;
   var levelShuttles = this.levels[this.currentLevel].shuttles;
   this.todayDate = new Date();
   this.todayDate.setMilliseconds(this.todayDate.getMilliseconds() + levelTime);
  }
}

export class Level {
  id: number;
  time: number;
  shuttles: number;
}
