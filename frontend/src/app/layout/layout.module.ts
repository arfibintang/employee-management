import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ClassicLayoutModule } from './classic-layout/classic-layout.module';
import { EmptyLayoutModule } from './empty-layout/empty-layout.module';

const layoutModules = [
  // Empty
  EmptyLayoutModule,

  // With Vertical Navbar
  ClassicLayoutModule,
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ...layoutModules
  ],
  exports: [
    LayoutComponent,
    ...layoutModules
  ]
})
export class LayoutModule { }
