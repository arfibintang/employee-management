import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { NoAuthGuard } from './guards/auth/no-auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // No authentication route
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '404',
        loadChildren: () => import('./pages/four-oh-four/four-oh-four.module').then(m => m.FourOhFourModule)
      },
    ]
  },

  // authenticated route
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'classic'
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule),
      },
      {
        path: 'employees/create',
        loadChildren: () => import('./pages/employees/add/add.module').then(m => m.AddModule),
      },
      {
        path: 'employees/show/:id',
        loadChildren: () => import('./pages/employees/show/show.module').then(m => m.ShowModule),
      },

    ]
  },

  // 404
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./pages/four-oh-four/four-oh-four.module').then(m => m.FourOhFourModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
