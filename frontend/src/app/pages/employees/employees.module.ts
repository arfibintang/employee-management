import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  }
]


@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzBreadCrumbModule,
    NzLayoutModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzMessageModule,
    NzAlertModule,
    NzModalModule,
    NzSelectModule
  ]
})
export class EmployeesModule { }
