import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from '../header/header.component';
import { MusicPlayerComponent } from '../music-player/music-player.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import {AuthorizatedGuard} from "../shared/authorizatedGuard";
import { SearchComponent } from '../search/search.component';

export const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'profile/:user', component: UserProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];