import { AppModule } from 'src/app/app.module';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './component/list/movie-list.component';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { CreateMovieComponent } from './component/create-movie/create-movie.component';
import { SharedModule } from '../shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';




@NgModule({
  imports: [SharedModule, MovieListRoutingModule],
  declarations: [MovieListComponent, CreateMovieComponent],
  exports: [MovieListComponent]
})
export class MovieListModule { }
