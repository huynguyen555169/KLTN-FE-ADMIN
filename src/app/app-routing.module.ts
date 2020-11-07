import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./pages/fashion/fashion.module').then(m => m.FashionModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: 'permission',
    loadChildren: () => import('./pages/permission/permission.module').then(m => m.PermissionModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
