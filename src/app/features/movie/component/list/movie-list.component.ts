import { Router } from '@angular/router';
import { MovieItem } from './../../type/movieItem';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { MovieItemDataTransmissionService } from '../../service/movie-item-data-transmission.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})

export class MovieListComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private msgSrv: NzMessageService,
    private movieItemDataTransService: MovieItemDataTransmissionService,
    private router: Router){}
  listOfData: Array<MovieItem> = new Array<MovieItem>();
  ngOnInit(): void {
    this.movieService.getAll().subscribe(res => {
      this.listOfData = res;
    });
  }

  handleDelete(id: string): void {
    const loadingMessage = 'Do you want to delete this item?';
    const messageId = this.msgSrv.loading(loadingMessage, { nzDuration: 0 }).messageId;

    this.movieService.delete(id).subscribe({
      next: () => {
        this.msgSrv.remove(messageId);
        const successMessage = 'Movie is deleted!';
        this.msgSrv.success(successMessage);
        this.deleteRow(id);
      },
      error: () => {

        this.msgSrv.remove(messageId);
      },
    });
  }

  handleEdit(data: MovieItem): void
  {
    this.movieItemDataTransService.currentMovieItem = data;
    this.router.navigate([`/movie/edit/${data.id}`]).catch(res => this.msgSrv.error(res));
  }

  private deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
}
