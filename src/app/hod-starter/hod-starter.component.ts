import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfvt-hod-starter',
  templateUrl: './hod-starter.component.html',
  styleUrls: ['./hod-starter.component.scss']
})
export class HodStarterComponent implements OnInit {

  wasStarted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startLFVT(): void{
    this.wasStarted = !this.wasStarted;
  }

}
