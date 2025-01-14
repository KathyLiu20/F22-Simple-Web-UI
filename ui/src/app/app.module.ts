import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ColumbiaStudentComponent } from './columbia_student/columbia-student.component';

import { ReactiveFormsModule } from '@angular/forms';
import {PlayerComponent} from './player/player.component';
import { SnuffleComponent } from './snuffle/snuffle.component';
import { NavtestComponent } from './navtest/navtest.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { ColumbiaAllComponent } from './columbia-all/columbia-all.component'
import { ImdbTitleComponent } from './imdb-title/imdb-title.component';
import {LoginComponent} from "./login-page/login.component";
import {SignupComponent} from "./signup-page/signup.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColumbiaStudentComponent,
    PlayerComponent,
    SnuffleComponent,
    NavtestComponent,
    ColumbiaAllComponent,
    ImdbTitleComponent,
    LoginComponent,
    SignupComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbNavModule,
      AppRoutingModule,
    ],
  providers: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


