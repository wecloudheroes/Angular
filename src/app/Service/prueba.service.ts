import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap }from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(
    private r:HttpClient
  ) { }

  getTodos(){

    this.r
    .get('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      tap(d => console.log(d))
    ).subscribe();

  }
}
