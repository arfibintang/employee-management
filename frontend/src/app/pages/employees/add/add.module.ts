import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

const routes: Routes = [
  {
    path: '',
    component: AddComponent
  }
]


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzBreadCrumbModule,
    NzLayoutModule,
    NzCardModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule
  ]
})
export class AddModule { }
