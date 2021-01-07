import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AudioSources } from '../shared/audioSources';
import {StorageService} from "../services/storage.service";
import { subscribeOn } from 'rxjs/operators';
import { Global } from '../services/global';
import { Track } from 'ngx-audio-player';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  songName: string;

  listenMusic: string;
  songSelected: number;
  musicListLength: number;
  musicList: string[];
  nameSongs;
  nameService;
  public url: string;

  playlist: Track[] = [];

  constructor(
    private storageService: StorageService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.nameSongs= [''];
    this.songSelected = 0,
    this.storageService.getNameFiles().subscribe(
      data => {
        this.nameService = data,
        this.nameSongs = this.nameService.song,
        this.musicListLength = this.nameSongs.length,
        this.songName = this.nameSongs[this.songSelected].title + " - " + this.nameSongs[this.songSelected].autor;

        for(let i = 0; i< this.musicListLength; i++){
          this.playlist.push(
            {
              title: this.nameSongs[i].title + " - " + this.nameSongs[i].autor,
              link: this.url+'getSong/'+this.nameSongs[i].nameFile
            }
          );
        }
        console.log(this.playlist);
      }
    );
    this.songName = this.nameSongs;
  };


}

