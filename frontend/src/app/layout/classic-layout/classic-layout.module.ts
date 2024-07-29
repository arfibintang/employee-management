import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic-layout.component';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';

// Import what you need. RECOMMENDED. ✔️
import { AccountBookFill, AlertFill, AlertOutline, UserOutline, LockOutline, MenuFoldOutline, FlagOutline } from '@ant-design/icons-angular/icons';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageModule } from 'ng-zorro-antd/message';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill, UserOutline, LockOutline, MenuFoldOutline, FlagOutline ];


@NgModule({
  declarations: [
    ClassicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzDropDownModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzDividerModule,
    NzTableModule,
    NzIconModule.forChild(icons),
    NzSelectModule,
    NzSpinModule,
    NzMessageModule
  ],
  exports: [
    ClassicLayoutComponent
  ]
})
export class ClassicLayoutModule { }
