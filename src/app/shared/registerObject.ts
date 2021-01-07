import { User } from './user';
export class RegisterObject {

  public name: string;
  public username: string;
  public email: string;
  public password: string;

  constructor( object: User){
    this.name = (object.name) ? object.name : null;
    this.username = (object.username) ? object.username : null;
    this.email = (object.email) ? object.email : null;
    this.password = (object.password) ? object.password : null;
  }
}