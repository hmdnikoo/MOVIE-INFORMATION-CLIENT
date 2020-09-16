import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './component/create-movie/create-movie/create-movie.component';
import { MovieListComponent } from './component/list/movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'new', component: CreateMovieComponent },
  { path: 'edit/:id', component: CreateMovieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
