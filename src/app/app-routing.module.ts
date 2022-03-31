import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { RoleGuardService as RoleGuard } from './role-guard.service'
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
