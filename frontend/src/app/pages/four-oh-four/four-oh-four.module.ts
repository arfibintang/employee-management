import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOhFourComponent } from './four-oh-four.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

const routes: Routes = [
  {
    path: '',
    component: FourOhFourComponent
  }
];

@NgModule({
  declarations: [
    FourOhFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzResultModule
  ]
})
export class FourOhFourModule { }
