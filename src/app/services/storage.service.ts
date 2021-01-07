import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../shared/session";
import { map } from 'rxjs/operators';
import { User } from '../shared/user';
import { Res } from '../shared/res';
import { Global } from '../services/global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { timingSafeEqual } from "crypto";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession : Session = null;
  public url: string;

  constructor(private router: Router,
    private _http: HttpClient) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    this.url = Global.url;
  }
  setCurrentSession(session: Session): void {
    this.currentSession = session;
    console.log(session.user);
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): Observable<Res>{
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    console.log("User Token: ", this.currentSession.token)
    return  this._http.get<Res>(this.url+'profile', {headers:auth});
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  updateSessionUser(): Observable<Res>{
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    const user = this.currentSession.user;
    console.log("User Actualizado: ", user)
    return  this._http.put<Res>(this.url+'profile/update', user, {headers:auth});
  };

  updateUser(updatedUser: User) {
    this.currentSession.user = updatedUser;
    this.updateSessionUser().subscribe(
      data => console.log(data.status),
      error => console.log(error)
    );;
  }

  updateImage(image: string) {
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    return this._http.put(this.url+'profile/updateImage', image, {headers:auth});
  }

  getCurrentImage() {
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    return this._http.get(this.url+'getImage/'+this.currentSession.user.image, {headers:auth})
  }

  getNameFiles() {
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    return this._http.get(this.url+'getNameFile', {headers:auth});
  }

  playThisSong(nameFile: String) {
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token,
      'Content-Type': 'text/plain'
    });
    return this._http.get(this.url+'getSong/'+nameFile, {headers:auth, responseType:'json'});
  }

  uploadSong(autor, cancion) {
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    return this._http.post(this.url+'uploadSong/', {autor,cancion}, {headers:auth});
  }
  
  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/home']);
    console.log(this.currentSession)
  }

  private extractData(res) {
    let body = res;
    console.log(body)
    return body;
  }

}
