import { NgModule } from '@angular/core';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';




@NgModule({
  imports: [MovieListRoutingModule],
  declarations: [MovieListComponent],
  exports: [MovieListComponent]
})
export class MovieListModule { }
