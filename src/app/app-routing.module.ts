import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './main/main/main.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fashion',
    loadChildren: () => import('./pages/fashion/fashion.module').then(m => m.FashionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),

  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'permission',
    loadChildren: () => import('./pages/permission/permission.module').then(m => m.PermissionModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'staff',
    loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-order',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'voucher',
    loadChildren: () => import('./pages/voucher/voucher.module').then(m => m.VoucherModule),
    canActivate: [AuthGuard]
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
