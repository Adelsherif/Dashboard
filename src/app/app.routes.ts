import { Addproduct } from './pages/addproduct/addproduct';
import { Routes } from '@angular/router';
import { authGuard } from './core/gaurd/auth-guard';

export const routes: Routes = [
  {path:'' , loadComponent:() => import('./layouts/auth/auth').then(c => c.Auth)},
  {path:'admin' ,
     loadComponent:() => import('./layouts/admin/admin').then(c => c.Admin),
     children: [
      {path:'' , loadComponent:() => import('./pages/home/home').then(c => c.Home)},
      {path:'adduser' , loadComponent:() => import('./pages/add-user/add-user').then(c => c.AddUser)},
      {path:'products' , loadComponent:() => import('./pages/products/products').then(c => c.Products)},
      {path:'allusers' , loadComponent:() => import('./pages/allusers/allusers').then(c => c.Allusers)},
      {path:'orders',loadComponent:() => import('./pages/orders/orders').then(c => c.Orders)},
      {path:'addproduct',loadComponent:() => import('./pages/addproduct/addproduct').then(c => c.Addproduct)},
      {path:'support',loadComponent:() => import('./pages/support/support').then(c => c.Support)},

      ],
    canActivate:[authGuard]
    },

];
