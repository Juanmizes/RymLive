import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';
import { NgbdAlertSelfclosing } from '../alert/alert.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('submitUserError', {static: false}) submitUserError: NgbdAlertSelfclosing;

  loginForm: FormGroup;
  register: boolean;
  userService: UserService;
  user: User;
  alert: NgbdAlertSelfclosing;
  error: boolean;

  name = "";
  username = "";
  password = "";
  email = "";
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.popUp();
    this.register = false;
    this.error = false;
    this.loginForm = this.formBuilder.group({
      Name:['', [Validators.pattern(/^\D+$/)]],
      Username:['', [Validators.required, Validators.pattern(/^\D+$/)]],
      Password:['', [Validators.required]],
      Email:['', [Validators.email]]
    })
  }

  async submit(){
    if(this.loginForm.invalid){
      this.error = true;
      return;
    }
    this.error = true;
    try {
      //Buscar en db el user
    }catch(e){
      console.log(e);
    }
    var overlay = document.getElementById('overlay').classList.remove('active');
    var popup = document.getElementById('popup').classList.remove('active');
  }

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
