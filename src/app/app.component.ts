import { Component } from '@angular/core';
import { Observable,Subscription } from 'rxjs/Rx';


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
  
  public currentLevel = 1; 
  title = 'Sams Beep Test!';
  public ticks = 0;
  public countdown = 0;
  public timer;
  public timer2;
  public sub: Subscription;
  public sub2: Subscription;
  public countdowntimer = 0;
  public audio: HTMLAudioElement;
  
  

  levels = LEVELS;

  beepStart() {
    console.log("start pressed");
    setTimeout(() => {
      this.playLevel(this.currentLevel);
    }, 750);
    this.levelRun();
    this.playBeep();
  }

  shuttleTicker(t) {
    //console.log("DONE" + " " + t);
    this.sub.unsubscribe();
    this.playBeep();
    this.ticks++;
    this.countdown--;
    if (this.countdown == 0){
      this.currentLevel++;
      this.ticks = 0;
      this.levelRun();
      setTimeout(() => {
        this.playLevel(this.currentLevel);
      }, 750);
      this.sub2.unsubscribe();
    } else {
      this.shuttleRun(this.levels[this.currentLevel].time);
      this.sub2.unsubscribe();
    }
  }

  levelRun() {
   
   if (this.currentLevel < 22) {
     //console.log(this.currentLevel);
     var levelTime = this.levels[this.currentLevel].time;
     var levelShuttles = this.levels[this.currentLevel].shuttles;
     this.countdown = levelShuttles;
     this.shuttleRun(levelTime);     
   }
 }

 shuttleRun(levelTime){
     this.timer = Observable.timer(levelTime,0);
     // subscribing to a observable returns a subscription object
     this.sub = this.timer.subscribe(t => this.shuttleTicker(t));
     this.countdowntimer = Math.floor(levelTime / 1000);
     //console.log(this.countdowntimer);
     this.timer2 = Observable.timer(0,1000);
     // subscribing to a observable returns a subscription object
     this.sub2 = this.timer2.subscribe(t => this.countdowntimerTicker(t));
     //console.log(this.ticks);
 }

 countdowntimerTicker(t){
   this.countdowntimer--;
   if (this.countdowntimer == -1) {
     this.countdowntimer = 0;
   }
 }

 playBeep() {
   console.log(this.audio);
   this.audio = new Audio();
   this.audio.src = "http://soundbible.com/mp3/Censored_Beep-Mastercard-569981218.mp3";
   //audio.load();
   this.audio.play();
 }

 playLevel(level){
   console.log(this.audio);
   this.audio = new Audio();
   var path = "./assets/audio/" + level + ".mp3";
   this.audio.src = path;
   //audio.load();
   this.audio.play();
 }
}

export class Level {
  id: number;
  time: number;
  shuttles: number;
}
