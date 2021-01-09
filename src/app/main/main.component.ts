import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { Res, ResSong } from '../shared/res';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  songsMostViewed;
  songImgDefault;
  resSong: ResSong;

  constructor(
    private storageService: StorageService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    this.songImgDefault = "../../assets/img/musical-note.svg";
    this.songsMostViewed = []
    this.storageService.getSongMostViewed().subscribe(
      data => {
        console.log(data)
        this.resSong = <ResSong>data
        console.log(this.resSong) 
        this.songsMostViewed = this.resSong.song
        this.updatePlaylist();
      }
    );
  }

  updatePlaylist() {
    this.playlistService.setPlaylist(this.songsMostViewed);
  }

}
