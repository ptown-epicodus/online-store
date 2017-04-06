import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.albums = angularFire.database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(id: number) {
    for (let i = 0; i < ALBUMS.length; i++) {
      let album: Album = ALBUMS[i];
      if (album.id  === id) {
        return album;
      }
    }
  }

}
