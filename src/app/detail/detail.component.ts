import { Component, OnInit } from '@angular/core';
import { SongDetails } from '../songDetails';
import { MySongs } from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    songs: SongDetails[] = MySongs
    currentSong: SongDetails

  constructor() { }

  ngOnInit() {
      this.songs = MySongs;
  }
  loadSong(song): void {
    this.currentSong = song;
  }
}
