import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostjobComponent } from './pages/postjob/postjob.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MyjobComponent } from './pages/myjob/myjob.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterRecComponent } from './auth/register-rec/register-rec.component';
import { RegisterCanComponent } from './auth/register-can/register-can.component';

const routes: Routes = [
  
  {path : "" , component :DefaultLayoutComponent},
  {path : "post-job" , component :PostjobComponent},
  {path : "my-job" , component :MyjobComponent},
  {path : "salary" , component :SalaryComponent},
  {path : "login" , component :LoginComponent},
  {path : "registerRec" , component :RegisterRecComponent},
  {path : "registerCand" , component :RegisterCanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
