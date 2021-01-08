import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { NgbdAlertSelfclosing } from '../alert/alert.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


import {LoginObject} from "../shared/loginObject";
import {RegisterObject} from "../shared/registerObject";
import {AuthenticationService} from "../services/authentication.service";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";
import {Session} from "../shared/session";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  currentSession;
  logged;

  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  name = "";
  username = "";
  password = "";
  email = "";
  

  // searchGroup: FormGroup;
  searchControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  uploadSongForm = new FormGroup({
    autor: new FormControl(''),
    title: new FormControl(''),
    song: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.logged = false;
    this.currentSession = this.storageService.getCurrentSession();
    if (this.currentSession) this.logged = true;
    this.register = false;
    this.errorr = false;  
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
    });
    // this.searchGroup = this.formBuilder.group({
    //   buscador:['',  Validators.required],
    // });
  }

  searchUsers(target){
    if(target == "") {
      this.options = [];
      this.updateOptions();
      return;
    }
    this.storageService.getOtherUsers(target).subscribe(
      res =>{
        let data:any = res;
        let users = data.usersSearched.map(
          user =>{
            return user.username
          } 
        )
        this.options = users;
        this.updateOptions();
      },
      error =>{
        this.options = [];
      }
    );
  }

  updateOptions(){
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)
    ));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){
      this.logged = true;
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body)
      )
      this.loginForm.reset();
    }

    if(this.registerForm.valid){
      console.log("register")
      this.authenticationService.register(new RegisterObject(this.registerForm.value)).subscribe(
        data => this.correctRegister(data),
        error => this.error = JSON.parse(error._body)
      )
      this.registerForm.reset();
    }
  }

  private correctLogin(data: Session){
    console.log(data)
    this.storageService.setCurrentSession(data);
    this.closePopup();
    this.profile();
  }
  private correctRegister(data: Session){
    console.log(data)
    this.storageService.setCurrentSession(data);
    this.closePopup();
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
      document.getElementById("submitButton").style.marginLeft = "-12%";
    }else if(this.register === false){
      this.register = true;
      document.getElementById("submitButton").style.marginLeft = "-24%";
    }
  }
  
  popUp() {
    var btnOpenPopup = document.getElementById('btn-open-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClosePopup = document.getElementById('btn-close-popup');
    overlay.classList.add('active');
    popup.classList.add('active');
    
    // btnOpenPopup.addEventListener('click', function(){
    //   overlay.classList.add('active');
    //   popup.classList.add('active');
    // });
    
    btnClosePopup.addEventListener('click', function(e){
      e.preventDefault();
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
    this.register = false;
  }

  closePopup(){
    var overlay = document.getElementById('overlay').classList.remove('active');
    var popup = document.getElementById('popup').classList.remove('active');
  }

  logout(){
    this.logged = false;
    this.options = [];
    this.updateOptions();
    this.currentSession = this.storageService.logout();
  }

  profile(){
    this.router.navigate(['/profile']);
  }

}
