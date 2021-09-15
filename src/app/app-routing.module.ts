import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HodPrototypeComponent } from './HoD Prototype';
import { HodStarterComponent } from './hod-starter/hod-starter.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

import { TeacherPrototypeComponent } from './TeacherPrototype';
import { LoginPageComponent } from './LoginPage';
import { InitializeComponent } from './initialize/initialize.component';

const routes: Routes = [
  {path: 'TeacherPrototype', component: TeacherPrototypeComponent},
  {path: 'Login', component: LoginPageComponent},
  {path: 'HodPrototype', component: HodPrototypeComponent},
  {path: 'hodstarter', component: HodStarterComponent},
  {path: 'teacherlist', component: TeacherListComponent},
  {path: 'init', component: InitializeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
