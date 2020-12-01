import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;
  register: boolean;

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
    this.loginForm = this.formBuilder.group({
      Name:[],
      Username:[],
      Password:[],
      Email:[]
    })
  }

  submit(){
    this.localLogin();
    var overlay = document.getElementById('overlay').classList.remove('active');
  }

  localLogin(){
    var localUser = "admin";
    var localPassword = "admin";

    if(this.loginForm.value.Name == localUser && this.loginForm.value.Password == localPassword){
      console.log("AAAAAAA");
    }
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
