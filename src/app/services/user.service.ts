import { Injectable } from '@angular/core';

import { User } from '../shared/user';
import { USERS } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(id: number) {
    return USERS.filter((user) => (user.id === id))[0];
  }

  getUsers(): User[] {
    return USERS;
  }

}
