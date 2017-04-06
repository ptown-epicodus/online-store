import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Album } from './album.model';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.albums = angularFire.database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(id: string) {
    return this.angularFire.database.object('albums/' + id);
  }

}
