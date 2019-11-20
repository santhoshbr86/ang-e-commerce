import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guard/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'profile', component:ProfileComponent},
  {path:'products', loadChildren:() => import('./product/product.module').then(m => m.ProductModule)},
  {path:'users', component:UsersComponent, canActivate:[AuthGuardService]},
  {path:'orders', component:OrdersComponent, canActivate:[AuthGuardService]},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
