import { MovieItem } from './../type/movieItem';
import { Injectable, Injector } from '@angular/core';
import { MOVIE_CONFIG } from '../movie-config';
import { RestBaseService } from '../../shared/service/base/rest-base.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends RestBaseService<MovieItem> {

  constructor(injector: Injector) {
    super(MOVIE_CONFIG.endpointUrl, injector);
  }
}
