import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {SupportComponent} from './support/support.component';
import {ProductComponent} from './product/product.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {CareersComponent} from './careers/careers.component';
import {UserhomeComponent} from './userhome/userhome.component';


const routes: Routes = [
 
 
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'product',
      component:ProductComponent
    },

    {
      path:'support',
      component:SupportComponent
    },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
  path:'careers',
  component:CareersComponent
  },
  {
path:'userhome',
component:UserhomeComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
