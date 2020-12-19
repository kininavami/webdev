import { MgrDashboardComponent } from './mgr-dashboard/mgr-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'mgr-dashboard', component:MgrDashboardComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
