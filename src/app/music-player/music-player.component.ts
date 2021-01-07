import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AudioSources } from '../shared/audioSources';
import {StorageService} from "../services/storage.service";
import { subscribeOn } from 'rxjs/operators';
import { Global } from '../services/global';


@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  songName: string;
  musicRute: string;
  listenMusic: string;
  songSelected: number;
  musicListLength: number;
  musicList: string[];
  audio: AudioSources[];
  player: Plyr;
  nameSongs;
  nameService;
  public url: string;

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
        // this.storageService.playThisSong(this.nameSongs[this.songSelected].nameFile).subscribe(
        //   data => {
        //     console.log(data)
        //   },
        //   error =>{
        //     console.log(error)
        //   }
        // );
        this.audio = [
          {
            src: this.nameSongs[this.songSelected].nameFile,
            type: 'audio/mp3',
            id: 'song',
          }
        ]
      }
    );
    this.musicRute = "../../assets/music/";
    this.musicList = ['1 - J Balvin - Brillo.mp3', '2 - Ozuna - La Modelo.mp3', '5 - Aitana - Lo Malo.mp3'];
    // this.storageService.playThisSong(this.nameSongs[this.songSelected]).subscribe(
    //   data => console.log(data,"1")
    // );
    this.songName = this.nameSongs;
  };

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  oneMore(){
    
    if (this.songSelected === this.musicListLength){
      this.songSelected = 0;
    }else{
      this.songSelected++;
    }
    this.listenMusic = this.musicRute+this.musicList[this.songSelected];
    this.songChanges();
  }

  oneLess(){
    if (this.songSelected === 0){
      this.songSelected = this.musicListLength;
    }else{
      this.songSelected--;
    }
    this.listenMusic = this.musicRute+this.musicList[this.songSelected];
    this.songChanges();
  }

  songChanges() {
    this.storageService.getNameFiles().subscribe(
      data => {
        this.nameService = data,
        this.nameSongs = this.nameService.song,
        this.musicListLength = this.nameSongs.length,
        this.songName = this.nameSongs[this.songSelected].title + " - " + this.nameSongs[this.songSelected].autor;
        this.audio = [
          {
            src: this.nameSongs[this.songSelected].nameFile,
            type: 'audio/mp3',
            id: 'song',
          }
        ]
      }
    );
  }

}

