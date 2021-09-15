import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Globals } from './app-global';

@Component({
  selector: 'lfvt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Globals]
})
export class AppComponent implements OnInit {
  title = 'lfvt';
  data?: any[];

  constructor(private client: HttpClient, public globals: Globals) {

  }


  ngOnInit(): void {
    this.client.get<any[]>('/weatherforecast').subscribe(d => this.data = d);
  }
}
