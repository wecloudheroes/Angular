import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombre: string ='Máximo Sánchez Conejo --Hola';
  constructor() { }

  ngOnInit() {
  }

}
