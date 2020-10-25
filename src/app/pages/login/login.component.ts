import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userID: new FormControl('', [

      ]),
      userPassWord: new FormControl('', [

      ]),
    });
  }

  get userID(): AbstractControl {
    return this.formLogin.get('userID');
  }
  get userPassWord(): AbstractControl {
    return this.formLogin.get('userPassWord');
  }

  handleLoginClick(): void { }
  handleForgotClick(): void { }
}

