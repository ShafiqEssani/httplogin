import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username: string;
  password: string;

  // registerCredentials = { username: '', password: '' };

  constructor(public UserProvider: UserProvider) {
  }

  login() {
    this.UserProvider.login(this.username, this.password);
  }

  createAccount() {
    console.log("working");
  }
}
