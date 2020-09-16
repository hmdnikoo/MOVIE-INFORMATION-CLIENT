import { MovieItem } from './../type/movieItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieItemDataTransmissionService {

  private movieItem: MovieItem = null;

  get currentMovieItem(): MovieItem {
    const currentData = this.movieItem;
    // use data once
    this.resetData();
    return currentData;
  }
  set currentMovieItem(value: MovieItem) {
    this.movieItem = value;
  }
  private resetData(): void {
    this.movieItem = null;
  }
}
