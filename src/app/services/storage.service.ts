import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../shared/session";
import { map } from 'rxjs/operators';
import { User } from '../shared/user';
import { Res } from '../shared/res';
import { Global } from '../services/global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    // var session: Session = this.getCurrentSession();
    // return (session && session.user) ? session.user : null;
    const auth = new HttpHeaders({
      'auth': 'Bearer ' + this.currentSession.token
    });
    return  this._http.get<Res>(this.url+'profile', {headers:auth});
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/home']);
    console.log(this.currentSession)
  }

}
