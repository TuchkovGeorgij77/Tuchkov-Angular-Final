import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirstJson } from './interface/firstJson';


@Injectable({
  providedIn: 'root'
})
export class JsMovie 
{
  constructor (private http:HttpClient) {}

  getMovies(url: string)
  {
    return this.http.get<FirstJson>(url);
  }
}
