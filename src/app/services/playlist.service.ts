import { Injectable, Output, EventEmitter } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  @Output() playlistChange: EventEmitter<Track[]> = new EventEmitter(); 

  playlist: Track[];

  constructor() {
    this.playlist = [];
  }

  setPlaylist(songs: Track[]) {
    this.playlist = songs;
    this.playlistChange.emit(this.playlist);
  }

}
