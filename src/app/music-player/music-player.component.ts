import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AudioSources } from '../shared/audioSources';

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
  
  constructor() {}

  ngOnInit(): void {
    this.musicRute = "../../assets/music/";
    this.musicList = ['1 - J Balvin - Brillo.mp3', '2 - Ozuna - La Modelo.mp3', '5 - Aitana - Lo Malo.mp3'];
    this.songSelected = 0;
    this.musicListLength = 2; 
    this.songName = this.musicList[this.songSelected].toString().substring(0, this.musicList[this.songSelected].length - 4);
    this.audio = [
      {
        src: this.musicRute+this.musicList[this.songSelected],
        type: 'audio/mp3',
        id: 'song',
      }
    ]
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
    this.songName = this.musicList[this.songSelected].toString().substring(0, this.musicList[this.songSelected].length - 4);
    this.audio = [
      {
        src: this.musicRute+this.musicList[this.songSelected],
        type: 'audio/mp3',
        id: 'song',
      }
    ];
  }

}

