import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardComponent } from './components/card/card.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeComponent } from './pages/home/home.component';
import { PostjobComponent } from './pages/postjob/postjob.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MyjobComponent } from './pages/myjob/myjob.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterRecComponent } from './auth/register-rec/register-rec.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterCanComponent } from './auth/register-can/register-can.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    SideBarComponent,
    CardComponent,
    NewsletterComponent,
    HomeComponent,
    PostjobComponent,
    DefaultLayoutComponent,
    MyjobComponent,
    SalaryComponent,
    RegisterRecComponent,
    RegisterCanComponent,
    JobDetailsComponent,
    LogincanComponent,
    LoginrecComponent,
    ApplicationFormComponent,
    ListJobComponent,
    ListofcandidateComponent,
    JobdetailsComponent,
    ProfileComponent,
    ProfilecandidatComponent,
    ProfilerecruteurComponent,
    UpdateJobComponent,
    EditProfileComponent,
    EditprofilerecComponent,
    ResetpasswordComponent,
    ForgotpassComponent,
    MeetingInvitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
