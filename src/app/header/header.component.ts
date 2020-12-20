import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { NgbdAlertSelfclosing } from '../alert/alert.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


import {LoginObject} from "../shared/loginObject";
import {AuthenticationService} from "../services/authentication.service";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";
import {Session} from "../shared/session";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('submitUserError', {static: false}) submitUserError: NgbdAlertSelfclosing;

  loginForm: FormGroup;
  registerForm: FormGroup;
  register: boolean;
  user: User;
  alert: NgbdAlertSelfclosing;
  errorr: boolean;

  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  name = "";
  username = "";
  password = "";
  email = "";
  
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.popUp();
    this.register = false;
    this.errorr = false;
    // this.loginForm = this.formBuilder.group({
    //   Name:['', [Validators.pattern(/^\D+$/)]],
    //   Username:['', [Validators.required, Validators.pattern(/^\D+$/)]],
    //   Password:['', [Validators.required]],
    //   Email:['', [Validators.email]]
    // })
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      name:['', [Validators.pattern(/^\D+$/)]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['', [Validators.email]],
    });
  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body)
      )
    }
  }

  private correctLogin(data: Session){
    console.log(data.user)
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/profile']);
  }

  // async submit(){
  //   if(this.loginForm.invalid){
  //     this.errorr = true;
  //     return;
  //   }
  //   this.errorr = true;
  //   try {
  //     //Buscar en db el user
  //     this.userService.getUser("5fda5e3291ea0200173870d0");
  //   }catch(e){
  //     console.log(e);
  //   }
  //   var overlay = document.getElementById('overlay').classList.remove('active');
  //   var popup = document.getElementById('popup').classList.remove('active');
  // }

  toggleRegister(){
    if(this.register === true){
      this.register = false;
      document.getElementById("submitButton").style.marginLeft = "-50px";
    }else if(this.register === false){
      this.register = true;
      document.getElementById("submitButton").style.marginLeft = "-100px";
    }
  }
  
  popUp() {
    var btnOpenPopup = document.getElementById('btn-open-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClosePopup = document.getElementById('btn-close-popup');
    
    btnOpenPopup.addEventListener('click', function(){
      overlay.classList.add('active');
      popup.classList.add('active');
    });
    
    btnClosePopup.addEventListener('click', function(e){
      e.preventDefault();
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
    this.register = false;
  }

}
