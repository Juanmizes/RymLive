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

  user = "";
  password = "";
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.popUp();
    this.loginForm = this.formBuilder.group({
      Name:[],
      Password:[]
    })
  }

  submit() {
    this.localLogin();
  }

  localLogin(){
    var localUser = "admin";
    var localPassword = "admin";

    if(this.loginForm.value.Name == localUser && this.loginForm.value.Password == localPassword){
      console.log("AAAAAAA");
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
  }

}
