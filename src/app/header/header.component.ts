import { Component, Input, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.popUp();
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
