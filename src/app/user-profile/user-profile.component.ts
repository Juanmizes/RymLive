import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { Res } from '../shared/res';
import { Global } from '../services/global';

import {StorageService} from "../services/storage.service";
import {AuthenticationService} from "../services/authentication.service";
import {Session} from "../shared/session";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public url: string;
  settingsAppear: boolean;
  oldValues: string;
  newValues: string;
  imageDefault: string;
  imageActually: string;

  showTableHeader: boolean;
  showUploadSong: boolean;
  totalRowsSongs: number;

  res: Res;
  user: User;
  session: Session;
  nameService;
  nameSongs;

  uploadSongForm = new FormGroup({
    autor: new FormControl(''),
    title: new FormControl(''),
    song: new FormControl('')
  });

  imageForm = new FormGroup({
    image: new FormControl(''),
  });


  fileToUpload: File = null;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { this.url = Global.url; }

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
        if(this.user.image == null){
          this.user.image = "../../assets/img/account_circle-24px.svg"
        }
      }
    );

    this.imageDefault = "account_circle-24px.svg";

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

    this.storageService.updateUser(this.user);

    this.settingsAppear = false;
    console.log("Settings disappear");
  }

  uploadImage(){
    //Change Image
    const input = <HTMLInputElement>document.getElementById('customFile');
    if(input.files && input.files[0]){
      console.log("File selected : ", input.files[0]);
      this.imageActually =  input.files[0].name;
      //this.imgRuteActually = (document.getElementById("customFile") as HTMLInputElement).value;

    }else  console.log("No file selected " + input.files[0]);
    this.user.description = this.oldValues;

    this.user.image = this.imageActually;

    const formData = new FormData();
    formData.append('image', this.fileToUpload);

    this.storageService.updateImage(formData).subscribe(
      res => {
        console.log(res)
      }
    );
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
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadSong() {
    let song = <HTMLInputElement>document.getElementById('uploadSong-input');
    let cadena, autor, cancion, file;

    const formData = new FormData();
    formData.append('song', this.fileToUpload);
    formData.append('title', this.uploadSongForm.get('title').value);
    formData.append('autor', this.uploadSongForm.get('autor').value);

    if(song.files && song.files[0]){
      cadena = song.files[0].name;
      autor = cadena.split("-")[0];
      cancion = cadena.split("-")[1];
      file = song.files[0];
      console.log(file)
    }
    this.storageService.uploadSong(formData).subscribe(res => {
      console.log(res);
      this.storageService.getNameFiles().subscribe(
        data => {
          this.nameService = data,
          this.nameSongs = this.nameService.song
          console.log("Mis canciones: ",this.nameSongs)
        }
      );
      this.closePopup();
    });
    
  }
}
