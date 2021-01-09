import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { LoginObject } from "../shared/loginObject";
import { Session } from "../shared/session";
import { Global } from '../services/global';
import { Res } from '../shared/res';
import { RegisterObject } from "../shared/registerObject";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public url: string;

  constructor( private _http: HttpClient) { 
    this.url = Global.url;
  }
 
  login(loginObj: LoginObject): Observable<Session> {
    return this._http.post(this.url+'login', loginObj).pipe(map(this.extractData));
  }

  register(registerObj: RegisterObject): Observable<Session> {
    return this._http.post(this.url+'register', registerObj).pipe(map(this.extractData));
  }
 
  logout(): Observable<Boolean> {
    return this._http.post(this.url + 'logout', {}).pipe(map(this.extractData));
  }
 
  private extractData(res) {
    let body = res;
    console.log(body)
    return body;
  }
 }
