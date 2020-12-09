import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Res } from '../shared/res';
import { Global } from '../services/global';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor( private _http: HttpClient) { 
    this.url = Global.url;
  }

  getUser(_id: String) {
    return  this._http.get<Res>(this.url+'profile/user/'+_id);
  }

  getUsers():Observable<any> {
    return this._http.get(this.url+'profile');
  }

}
