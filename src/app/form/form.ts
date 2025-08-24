import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { JsMovie } from '../js-movie';
import { Movie } from '../interface/movie';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  template: ``,
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form
{
  inpText = '';
  url = '';
  loadText = ''
  pageNum: number = 1;

  show = false;

  js = inject(JsMovie);
  movies: Movie[] = [];

  search()
  {
    if (this.inpText == '') 
    {
      this.movies = [];
      this.pageNum = 1;
    }
    if (this.inpText != '' && this.movies == null)
    {
      this.loadText = 'Загрузка...';
      this.pageNum = 1;
    }
    else this.loadText = ''

    const oldList = this.movies;
    this.url = 'https://www.omdbapi.com/?apikey=a2b07930&s=' + this.inpText + '&page=' + this.pageNum.toString();
    this.js.getMovies(this.url).subscribe(data => {
      if (data.Search) 
      {
        if (this.pageNum === 1) 
        {
          this.movies = data.Search;
        } 
        else 
        {
          this.movies = [...this.movies, ...data.Search];
        }
      } 
      else 
      {
        if (this.pageNum === 1) 
        {
          this.movies = [];
        }
      }
      this.loadText = '';
    });
  }

  incPageNum()
  {
    this.pageNum++;
    this.search();
  }
}
