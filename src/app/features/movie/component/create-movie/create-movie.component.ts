
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieItem } from '../../type/movieItem';
import { MovieService } from '../../service/movie.service';
import { MovieItemDataTransmissionService } from '../../service/movie-item-data-transmission.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.less']
})
export class CreateMovieComponent implements OnInit {
  isSaving: false;
  public form: FormGroup;
  isNewItem = true;
  movieItem: MovieItem = new MovieItem();
  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private msgSrv: NzMessageService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private movieItemDataTransService: MovieItemDataTransmissionService,
    ){

    }

    get selectedMovieItem(): MovieItem {
      const movieItem = this.movieItemDataTransService.currentMovieItem;

      if (movieItem) {
        this.movieItem = movieItem;
      }

      return this.movieItem;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      storyLine: ['', Validators.required],
      language: ['', Validators.required],
    });

    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.form.patchValue({
          title: this.selectedMovieItem.title,
          storyLine: this.selectedMovieItem.storyLine,
          language: this.selectedMovieItem.language,
        });
        this.isNewItem = false;
      }
    });
  }

  submitForm(): void{
    this.movieItem.title = this.form.value.title;
    this.movieItem.language = this.form.value.language;
    this.movieItem.storyLine = this.form.value.storyLine;
    this.isNewItem ? this.create(this.movieItem) : this.update(this.movieItem);
  }
  private create(movieItem: MovieItem): void{
    this.movieService.create(this.movieItem).subscribe({
      error: res => {
        this.isSaving = false;
        this.msgSrv.error(res);
      },
      complete: () => {
        this.msgSrv.success('Movie is Created!');
        this.isSaving = false;
        this.returnBack();
      },
    });
  }

  private update(movieItem: MovieItem): void{
    this.movieService.update(movieItem).subscribe({
      error: res => {
        this.isSaving = false;
        this.msgSrv.error(res);
      },
      complete: () => {
        this.msgSrv.success('Movie is Edited!');
        this.isSaving = false;
        this.returnBack();
      },
    });
  }
  cancel(): void {
    this.returnBack();
  }

  private returnBack(): void {
    this.router.navigate(['/movie/list']).catch(res => this.msgSrv.error(res));
  }

}
