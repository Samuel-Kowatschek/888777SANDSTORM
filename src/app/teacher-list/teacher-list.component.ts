import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


const ELEMENT_DATA: TeacherElement[] = [
  {position: 1, name: 'Peter Bauer', status: 'Done'},
  {position: 2, name: 'Rainer Stropek', status: 'Done'},
  {position: 3, name: 'Rosemarie Brenn', status: 'In Progress'},
  {position: 4, name: 'Karl Kaiser', status: 'Done'},
  {position: 5, name: 'Gerhard Köck', status: 'Done'},
  {position: 6, name: 'Edwin Wingert', status: 'Done'},
  {position: 7, name: 'Aberger Christian', status: 'In Progress'},
  {position: 8, name: 'Baumann Daniel', status: 'Done'},
  {position: 9, name: 'Bodenstorfer Bernhard', status: 'In Progress'},
  {position: 10, name: 'Gerhard Köck', status: 'Done'},
  {position: 11, name: 'Edwin Wingert', status: 'Done'},
  {position: 12, name: 'Aberger Christian', status: 'In Progress'},
  {position: 13, name: 'Baumann Daniel', status: 'Done'},
  {position: 14, name: 'Bodenstorfer Bernhard', status: 'In Progress'},
  {position: 15, name: 'Gerhard Köck', status: 'Done'},
  {position: 16, name: 'Edwin Wingert', status: 'Done'},
  {position: 17, name: 'Aberger Christian', status: 'In Progress'},
  {position: 18, name: 'Baumann Daniel', status: 'Done'},
  {position: 19, name: 'Bodenstorfer Bernhard', status: 'In Progress'},
  {position: 20, name: 'Gerhard Köck', status: 'Done'},
  {position: 21, name: 'Edwin Wingert', status: 'Done'},
  {position: 22, name: 'Aberger Christian', status: 'In Progress'},
  {position: 23, name: 'Baumann Daniel', status: 'Done'},
  {position: 24, name: 'Bodenstorfer Bernhard', status: 'In Progress'},
];

export interface TeacherElement{
  position: number;
  name: string;
  status: string;
}

@Component({
  selector: 'lfvt-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent implements OnInit, AfterViewInit {


  
  

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'status'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<TeacherElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    //load data from database into array
  }

}
