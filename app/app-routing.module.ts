import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { secureguardGuard } from './secureguard.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'order',
    component:OrderComponent,
    canActivate:[secureguardGuard]
  },
  {
    path:'addtocart',
    component:AddtocartComponent,
    canActivate:[secureguardGuard]
    
  },
  {
    path:'logout',
    component:LogoutComponent,
    
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
