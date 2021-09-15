import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../app-global';

@Component({
  templateUrl: 'loginPage.component.html',
  styleUrls: ['loginPage.component.css']
})

export class LoginPageComponent {

  teachers: string[] = ["admin", "bre", "stro", "stu", "hof"];
  nameId = "";
  admin = "admin";


  constructor(private formBuilder: FormBuilder, public globals: Globals, private router: Router) {
  }
  loginForm = this.formBuilder.group({
    inputName: ""
  })

  classControl = new FormControl();

  onClickSubmit(): void{
     this.nameId = this.loginForm.value.inputName;

     if(this.teachers.includes(this.nameId)){
        this.globals.loggedIn = true;
        console.log(this.globals.loggedIn);
        this.router.navigate(['/TeacherPrototype']);

     }
}
}

