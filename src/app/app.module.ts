import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2UploaderModule } from 'ng2-uploader';
//import { ROUTER_PROVIDERS } from '@angular/router/';
//import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { H1BComponent } from './H1Bpage/h1-b/h1-b.component';
import { H1BchecklistComponent } from './H1Bpage/h1-bchecklist/h1-bchecklist.component';
import { PersonalProfileComponent } from './H1Bpage/personal-profile/personal-profile.component';
import { EducationFormComponent } from './H1Bpage/education-form/education-form.component';
import { EmploymentHistoryComponent } from './H1Bpage/employment-history/employment-history.component';
import { DocumentUploadComponent } from './H1Bpage/document-upload/document-upload.component';
//import { ServiceComponent } from './service/service/service.component';

const appRoutes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'H1B',component:H1BComponent}
  // { path:'service',component:ServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    H1BComponent,
    H1BchecklistComponent,
    PersonalProfileComponent,
    EducationFormComponent,
    EmploymentHistoryComponent,
    DocumentUploadComponent,
    //ServiceComponent
  ],
  imports: [
    BrowserModule,
    Ng2UploaderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
