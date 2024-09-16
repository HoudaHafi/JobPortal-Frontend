import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostjobComponent } from './pages/postjob/postjob.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MyjobComponent } from './pages/myjob/myjob.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { RegisterRecComponent } from './auth/register-rec/register-rec.component';
import { RegisterCanComponent } from './auth/register-can/register-can.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { LogincanComponent } from './auth/logincan/logincan.component';
import { LoginrecComponent } from './auth/loginrec/loginrec.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { ListJobComponent } from './pages/list-job/list-job.component';
import { ListofcandidateComponent } from './pages/listofcandidate/listofcandidate.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfilecandidatComponent } from './pages/profilecandidat/profilecandidat.component';
import { ProfilerecruteurComponent } from './pages/profilerecruteur/profilerecruteur.component';
import { UpdateJobComponent } from './pages/update-job/update-job.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditprofilerecComponent } from './pages/editprofilerec/editprofilerec.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { ForgotpassComponent } from './auth/forgotpass/forgotpass.component';
import { MeetingInvitationComponent } from './pages/meeting-invitation/meeting-invitation.component';

const routes: Routes = [
  
  {path : "" , component :DefaultLayoutComponent},
  {path : "post-job" , component :PostjobComponent},
  {path : "my-job" , component :MyjobComponent},
  {path : "salary" , component :SalaryComponent},
  {path : "loginCan" , component :LogincanComponent},
  {path: 'forgotpass', component: ForgotpassComponent },
  {path: 'resetpass/:token', component: ResetpasswordComponent },
  {path : "loginRec" , component :LoginrecComponent},
  {path : "registerRec" , component :RegisterRecComponent},
  {path : "registerCan" , component :RegisterCanComponent},
  {path : "jobDetails/:id" , component :JobDetailsComponent},
  {path: 'apply', component: ApplicationFormComponent },
  {path: 'listjob', component: ListJobComponent },
  {path: 'candidates/:jobId', component: ListofcandidateComponent },
  {path : "jobdetails/:id" , component :JobdetailsComponent},
  {path: 'profile-candidat/:id', component: ProfilecandidatComponent },
  {path: 'profile/:id/edit', component: EditProfileComponent },
  {path: 'profile-recruteur/:id', component: ProfilerecruteurComponent },
  {path: 'profilerec/:id/modifier', component: EditprofilerecComponent },
  {path : "profile/:id/:jobId/:jobAppId" , component :ProfileComponent},
  { path: 'meeting-invitation', component: MeetingInvitationComponent },
  {path: 'updatejob/:id', component: UpdateJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
