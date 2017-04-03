import { Injectable } from '@angular/core';

import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
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
