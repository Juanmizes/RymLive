import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { Res } from '../shared/res';
import { Global } from '../services/global';
import {map, startWith} from 'rxjs/operators';

import {StorageService} from "../services/storage.service";
import {AuthenticationService} from "../services/authentication.service";
import {Session} from "../shared/session";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaylistService } from '../services/playlist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public url: string;
  settingsAppear: boolean;
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

  userSearched: boolean;

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
    private authenticationService: AuthenticationService,
    private playlistService: PlaylistService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { this.url = Global.url; }

  ngOnInit(): void {
    this.uploadSongForm = this.formBuilder.group({
      autor: ['', Validators.required],
      title: ['', Validators.required],
      song: ['', Validators.required]
    });
    this.userSearched = false;
    this.router.params.subscribe(
      data =>{
        if(data['user']){
          this.userSearched = true;
          this.recibeUser(data);
          this.imageDefault = "../assets/img/account_circle-24px.svg";
  
          this.settingsAppear = false;
          this.showTableHeader = false;
          this.showUploadSong = false;
        }
      }
    )
    if(this.userSearched == false){
      this.storageService.getNameFiles().subscribe(
        data => {
          this.nameService = data,
          this.nameSongs = this.nameService.song
        }
      );
      this.storageService.getCurrentUser().subscribe(
        data => {
          this.res = data;
          this.user = this.res.user;
          console.log(this.user.image)
        }
      );
      this.imageDefault = "../assets/img/account_circle-24px.svg";
  
      this.settingsAppear = false;
      this.showTableHeader = false;
      this.showUploadSong = false;
    }
  }

  inSettings(){
    if( this.userSearched == false){
      this.settingsAppear = true;
      console.log("In settings");
    }
  }
  noInSettings(){
    if( this.userSearched == false){
      this.settingsAppear = false;
      console.log("In settings Off");
    }
  }

  saveChanges(){
    //Change Biography
    let error = null;
    this.newValues = (document.getElementById('biography-input') as HTMLInputElement).value;
    this.user.description = this.newValues;
    this.storageService.updateUser(this.user);
    this.settingsAppear = false;
    this.storageService.getCurrentUser().subscribe(
      data => {
        this.res = data;
        this.user = this.res.user;
      }
    );
  }

  uploadImage(){
    //Change Image
    const input = <HTMLInputElement>document.getElementById('customFile');
    if(input.files && input.files[0]){
      console.log("File selected : ", input.files[0]);
      this.imageActually =  input.files[0].name;
      //this.imgRuteActually = (document.getElementById("customFile") as HTMLInputElement).value;

    }else  console.log("No file selected " + input.files[0]);

    this.user.image = this.imageActually;

    const formData = new FormData();
    formData.append('image', this.fileToUpload);

    this.storageService.updateImage(formData).subscribe(
      res => {
        console.log("Imagen subida : ",res)
      }
    );
    this.storageService.getCurrentUser().subscribe(
      data => {
        this.res = data;
        this.user = this.res.user;
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
    let song = <HTMLInputElement>document.getElementById('uploadSong-archivo');
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
    }
   this.recibeSong(formData);
  }

  updatePlaylist() {
    this.playlistService.setPlaylist(this.nameSongs);
  }

  recibeUser(data){
    this.storageService.getOtherUser(data['user']).subscribe(
      data => {
        this.res = data;
        this.user = this.res.user;
        this.storageService.getOtherNameFiles(this.user._id).subscribe(
          data => {
            this.nameService = data,
            this.nameSongs = this.nameService.song
          }
        );
      }
    );
  }

  recibeSong(formData){
    this.storageService.uploadSong(formData).subscribe(res => {
      this.storageService.getNameFiles().subscribe(
        data => {
          this.nameService = data,
          this.nameSongs = this.nameService.song,
          this.playlistService.setPlaylist(this.nameSongs)
        }
      );
      this.closePopup();
    });
  }
}
// <form class="container-inputs" id="uploadSong" [formGroup]="uploadSongForm">
//                         <input id="uploadSong-autor" placeholder="Autor" type="text" formControlName="autor">
//                         <input id="uploadSong-titulo" placeholder="Titulo" type="text" formControlName="title">
//                         <input id="uploadSong-archivo" type="file" formControlName="song" (change)="handleFileInput($event.target.files)"><br>
//                         <button id="submitButton" (click)="uploadSong()" type="submit" class="btn btn-dark"  form="login-form"> Upload </button>
//                     </form>