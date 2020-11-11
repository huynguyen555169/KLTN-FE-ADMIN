import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AuthenticationService } from 'src/app/core/authentication/authentication';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Title in login page
   * Default: Login
   */
  @Input() title = 'Login';
  /**
   * Backgroud image for register page
   */
  @Input() bgImgUrl = '../../assets/images/15740.jpg';
  /**
   * Logo image for logo in login page
   */
  @Input() logoImgUrl;
  /**
   * Navigation for forgot password page
   */
  @Input() forgotNavigation;
  /**
   * Navigation for register page
   */
  registerNavigation = '/register';

  /**
   * Info account user login
   * loginInfo : {
   *    info: {
   *      email: string;
   *      password: string;
   *    },
   *    remember: boolean
   * }
   */
  @Output() loginInfo = new EventEmitter<any>();

  /**
   * Hide button in input password
   */
  hide = true;
  /**
   * Remember account
   */
  remember = false;

  /**
   * Login form
   */
  loginForm: FormGroup;
  statusLogin = false;

  constructor(
    private router: Router,
    private authentication: AuthenticationService,
    private spinner: CSpinnerService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  /**
   * Handle event when checkbox remember checked or unchecked
   * @param event MatCheckboxChange
   */
  checkboxChange(event: MatCheckboxChange) {
    this.remember = event.checked;
  }

  /**
   * return url of logo image for page
   */
  getUrl() {
    return `url(${this.logoImgUrl})`;
  }

  /**
   * return url of background image for page
   */
  getBackGroundImg() {
    return `url(${this.bgImgUrl})`;
  }

  /**
   * Handle when user click login button
   * Return info account login and remeber account for parent
   */
  login() {
    this.spinner.show();
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.authentication.login(formValue.email, formValue.password).subscribe(res => {
        this.spinner.hide();
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.authentication.currentUserSubject.next(res);
        this.router.navigate(['/dashboard']);
      }, () => {
        this.statusLogin = true;
      });
    }
  }

  /**
   * Handle when user click register button
   * Navigate to register page
   */
  register() {
    if (this.registerNavigation) {
      this.router.navigate([`/${this.registerNavigation}`]);
    }
  }
}
