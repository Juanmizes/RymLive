import { Component, OnInit } from '@angular/core';

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
  musicList: string[]
  
  constructor() { }

  ngOnInit(): void {
    this.musicList = ['1 - J Balvin - Brillo.mp3', '2 - Ozuna - La Modelo.mp3', '5 - Aitana - Lo Malo.mp3'];
    this.musicRute = "../../assets/music/";
    this.songSelected = 0;
    this.musicListLength = 2; //One less of the true length
  
  }
  
  player: Plyr;

  audioSources = [
    {
      src: '../../assets/music/'+'1 - J Balvin - Brillo.mp3',
      type: 'audio/mp3',
      id: 'song',
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

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
    console.log("Funciona el botón de oneMore");
    if (this.songSelected === this.musicListLength){
      this.songSelected = 0;
    }else{
      this.songSelected++;
    }
    this.listenMusic = this.musicRute+this.musicList[this.songSelected];
    console.log(this['listenMusic'])
    //document.getElementById("song").replaceWith( "<source src='"+this.listenMusic+"' type='audio/mp3' id='song'>" );
  }

  oneLess(){
    console.log("Funciona el botón de oneLess");
    if (this.songSelected === 0){
      this.songSelected = this.musicListLength;
    }else{
      this.songSelected--;
    }
    this.listenMusic = this.musicRute+this.musicList[this.songSelected];
    console.log(this['listenMusic'])
  }

}

