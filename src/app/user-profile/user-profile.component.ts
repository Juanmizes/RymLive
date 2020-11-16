import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  settingsAppear: boolean;
  oldValues: string;
  newValues: string;
  imgRute: string;
  imageDefault: string;
  imageActually: string;

  showTableHeader: boolean;

  constructor() { }

  ngOnInit(): void {
    this.oldValues = document.getElementById('temporal').innerHTML;

    this.imgRute = "../../assets/img/";
    this.imageDefault = "account_circle-24px.svg";
    this.imageActually = this.imageDefault;

    this.settingsAppear = false;
    this.showTableHeader = false;

    this.playMusic();
  }

  inSettings(){
    this.settingsAppear = true;
    console.log("In settings");
  }

  saveChanges(){
    //Change Biography
    this.newValues = (document.getElementById('biography-input') as HTMLInputElement).value;
    this.oldValues = this.newValues;

    //Change Image
    const input = <HTMLInputElement>document.getElementById('customFile');
    if(input.files && input.files[0]){
      console.log("File selected : ", input.files[0]);
      this.imageActually =  input.files[0].name;
      
    }else 
      console.log("No file selected " + input.files[0]);

    this.settingsAppear = false;
    console.log("Settings disappear");
  }

  loadTable(){
    this.showTableHeader = true;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../../assets/json/mySongTable.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

      if(this.readyState == 4 && this.status == 200){

        let datos = JSON.parse(this.responseText);
        let res = document.querySelector('#tableBody');
        res.innerHTML='';

        for(let item of datos){
          res.innerHTML += `
          <tr>
            <th scope="row">${item.id}</th>
            <td>${item.soungName}</td>
            <td>${item.autor}</td>
            <td>${item.time}</td>
            <td><div id="musicPlayer-icon"><button type="button" class="btn btn-outline-dark btn-sm" (click)="playMusic()">Play</button></div></td>
          </tr>
          `
        }
      }
    }
  }

  playMusic(){  

  }

}
