import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule, Routes } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

const routes: Routes = [
  {
    path: '',
    component: ShowComponent
  }
]

@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzCardModule,
    NzDividerModule,
    NzSpinModule,
    NzFormModule,
    FormsModule,
    NzButtonModule,
    RouterModule.forChild(routes),
    NzInputModule,
    NzInputNumberModule,
    NzSpinModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzModalModule,
    NzDescriptionsModule,
    NzCommentModule,
    NzAvatarModule
  ]
})
export class ShowModule { }
