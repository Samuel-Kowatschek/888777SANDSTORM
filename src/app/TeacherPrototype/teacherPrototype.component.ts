import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Globals } from '../app-global';

interface SchoolClass {
  value: string;
  viewValue: string;
}

interface TeachingPriority {
  schoolClass: string;
  subject: string;
}

interface SchoolLevel {
  disabled?: boolean;
  name: string;
  classes: SchoolClass[];
}
/*
interface TeacherWish{
  minHours: number;
  maxHours: number;
  hoursInDifSchool: number;
  wunschKlasse: SchoolClass;
  addInfo: string;
}
*/
@Component({
  templateUrl: 'teacherPrototype.component.html',
  styleUrls: ['teacherPrototype.component.css']
})

export class TeacherPrototypeComponent implements OnInit{

  loggedIn = false;
  value = "";
  selectedPriorityClass = "";
  selectedPrioritySubject :string;
  teachingPrio: TeachingPriority;

  teachingPriorities: TeachingPriority[];

  constructor(private formBuilder: FormBuilder, public globals: Globals) {
      this.teachingPriorities = [];
      this.selectedPrioritySubject = '';
      this.teachingPrio = {schoolClass: '', subject: ''} ;
    }

  checkoutForm = this.formBuilder.group({
    minHours: 0,
    maxHours: 0,
    hoursInDifSchool: 0,
    wunschKlasse: '',
    addInfo: ''
  })



  subjects: string[] = [
    'Physik',
    'Mathe',
    'Deutsch',
    'Englisch',
    'Programmieren',
    'Religion'
  ];


  classControl = new FormControl();
  schoolYears: SchoolLevel[] = [
    {
      name: 'Erste Klassen',
      classes: [
        {value: '1AHIF-0', viewValue: '1AHIF'},
        {value: '1AHITM-1', viewValue: '1AHTIM'},
        {value: '1BHIF-2', viewValue: '1BHIF'}
      ]
    },
    {
      name: 'Zweite Klassen',
      classes: [
        {value: '2CHITM-3', viewValue: '2CHITM'},
        {value: '2DHIF-4', viewValue: '2DHIF'},
        {value: '2AHIF-5', viewValue: '2AHIF'}
      ]
    },
    {
      name: 'Dritte Klassen',
      disabled: true,
      classes: [
        {value: '3BHIF-6', viewValue: '3BHIF'},
        {value: '3-DHITM-7', viewValue: '3DHITM'},
        {value: '3AHITM-8', viewValue: '3AHITM'}
      ]
    },
    {
      name: 'Vierte Klassen',
      classes: [
        {value: '4AHITM-9', viewValue: '4AHITM'},
        {value: '4DHIF-10', viewValue: '4DHIF'},
      ]
    }
  ];



  onClickSubmit(): void{
      console.log(this.checkoutForm.value);
      console.log(this.selectedPrioritySubject);
      this.checkoutForm.reset();
  }

  addPriorityOfTeaching() :void{
    this.teachingPrio.schoolClass = this.selectedPriorityClass;
    this.teachingPrio.subject = this.selectedPrioritySubject;
    this.teachingPriorities.push(this.teachingPrio);

    this.teachingPrio = {schoolClass: '', subject: ''};

  }

  ngOnInit(): void {
    this.loggedIn = this.globals.loggedIn;
    console.log(this.globals.loggedIn)
  }

}
