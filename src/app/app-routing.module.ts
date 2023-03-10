import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./landing-page/landing-page.component').then(c => c.LandingPageComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
  {path: 'home', loadComponent: () => import('./homepage/homepage.component').then(c => c.HomepageComponent),
    children: [
      { path: '', loadComponent: () => import('./allquestions/allquestions.component').then(c => c.AllquestionsComponent)},
      { path: 'add', loadComponent: () => import('./addquestion/addquestion.component').then(c => c.AddquestionComponent)},
      { path: 'one/:id', loadComponent: () => import('./onequestion/onequestion.component').then(c => c.OnequestionComponent)} 
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
