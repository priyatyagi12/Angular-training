import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  
  {
    path: "login",
    component: LoginComponentComponent
  },
  {path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"register",component: RegistrationComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
