import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
