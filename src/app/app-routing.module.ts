import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)},
  {path:'register', loadComponent:()=>import('./register/register.component').then(c=>c.RegisterComponent)},
  {path:'login', loadComponent:()=>import('./login/login.component').then(c=>c.LoginComponent)}
  // {path:'', loadComponent:()=>import('./landing-page/landing-page.component').then(c=>c.LandingPageComponent)};
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
