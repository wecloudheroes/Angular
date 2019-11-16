import { Component, OnInit } from '@angular/core';
import { PruebaService } from './Service/prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practica';

  constructor(
    private test: PruebaService
  )
  {}
  ngOnInit():void{
    console.log('start');
    this.test.getTodos();
  }
}
