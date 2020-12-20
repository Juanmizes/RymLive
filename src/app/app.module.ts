import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { PlyrModule } from 'ngx-plyr';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { NgbdAlertSelfclosing } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {StorageService} from "./services/storage.service";
import {AuthorizatedGuard} from "./shared/authorizatedGuard";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MusicPlayerComponent,
    UserProfileComponent,
    NgbdAlertSelfclosing
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    PlyrModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    StorageService,
    AuthorizatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }