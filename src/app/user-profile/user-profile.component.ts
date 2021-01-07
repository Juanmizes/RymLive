import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { Res } from '../shared/res';

import {StorageService} from "../services/storage.service";
import {AuthenticationService} from "../services/authentication.service";
import {Session} from "../shared/session";

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
  imgRuteActually: string;
  imageDefault: string;
  imageActually: string;
  profileImage: any;

  showTableHeader: boolean;
  showUploadSong: boolean;
  totalRowsSongs: number;

  test: any;

  res: Res;
  user: User;
  session: Session;
  nameService;
  nameSongs;


  fileToUpload: File = null;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.storageService.getNameFiles().subscribe(
      data => {
        this.nameService = data,
        this.nameSongs = this.nameService.song
        console.log("Mis canciones: ",this.nameSongs)
      }
    );
    this.storageService.getCurrentUser().subscribe(
      data => {
        this.res = data;
        this.user = this.res.user;
        console.log("Usuario: ", this.user)
        this.oldValues = this.res.user.description;
        this.user.image = this.res.user.image;
        if(this.user.image == null){
          this.user.image = "../../assets/img/account_circle-24px.svg"
        }
      }
    );
    // this.storageService.getCurrentImage().subscribe(
    //   data => console.log(data,"3")
    // );


    //Ochando 5fce7127c91df933046b0d8a
    
    // this.userService.getUser("5fda5e3291ea0200173870d0").subscribe(
    //   res => { 
    //     this.user = res.user;
    //     this.oldValues = this.user.description;
    //     if(this.user.image == null){
    //       this.user.image = "../../assets/img/account_circle-24px.svg"
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.imgRute = "../../assets/img/";
    this.imgRuteActually = this.imgRute;
    this.imageDefault = "account_circle-24px.svg";
    this.imageActually = this.imageDefault;

    this.settingsAppear = false;
    this.showTableHeader = false;
    this.showUploadSong = false;

  }

  inSettings(){
    this.settingsAppear = true;
    console.log("In settings");
  }

  saveChanges(){
    //Change Biography
    let error = null;
    this.newValues = (document.getElementById('biography-input') as HTMLInputElement).value;
    this.oldValues = this.newValues;

    //Change Image
    const input = <HTMLInputElement>document.getElementById('customFile');
    if(input.files && input.files[0]){
      console.log("File selected : ", input.files[0]);
      this.imageActually =  input.files[0].name;
      //this.imgRuteActually = (document.getElementById("customFile") as HTMLInputElement).value;

    }else  console.log("No file selected " + input.files[0]);
    this.user.description = this.oldValues;

    this.storageService.updateUser(this.user);
    this.storageService.updateImage(this.imageActually).subscribe(
      data => console.log(data)
    );

    this.settingsAppear = false;
    console.log("Settings disappear");
  }
  
  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
  }

  closePopup(){
    this.showTableHeader = true;
    this.showUploadSong = false;
  }

  popupSong(){
    this.showTableHeader = false;
    this.showUploadSong = true;
  }

  uploadSong() {
    let song = <HTMLInputElement>document.getElementById('uploadSong-input');
    let cadena;
    let autor;
    let cancion;
    if(song.files && song.files[0]){
      cadena = song.files[0].name;
      autor = cadena.split("-")[0];
      cancion = cadena.split("-")[1];
    }
    this.storageService.uploadSong(autor, cancion).subscribe(
      data => this.closePopup(),
      error => console.log(error)
    );
  }
}
