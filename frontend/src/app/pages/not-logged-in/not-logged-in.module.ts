import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotLoggedInComponent } from './not-logged-in.component';
import { RouterModule, Routes } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';

const routes: Routes = [
  {
    path: '',
    component: NotLoggedInComponent
  }
];

@NgModule({
  declarations: [
    NotLoggedInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzResultModule
  ]
})
export class NotLoggedInModule { }
