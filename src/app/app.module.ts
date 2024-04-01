import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { LoginComponent } from './auth/login/login.component';
import { RegisterRecComponent } from './auth/register-rec/register-rec.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterCanComponent } from './auth/register-can/register-can.component';

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
    LoginComponent,
    RegisterRecComponent,
    RegisterCanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
