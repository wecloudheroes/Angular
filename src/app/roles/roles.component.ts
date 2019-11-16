import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  validacionesTest = [
  Validators.required,
]
  
  rolesForm = new FormGroup({
    nombre: new FormControl('',this.validacionesTest),
    correo: new FormControl(''),
  });

  constructor() { }
  ngOnInit() {
  }
  /*onSave(){
   console.log('Hola mundo');
    //console.log(this.rol);
    //this.rol.nombre = 'prueba';
    //console.log(this.nombre);
  }*/

  prueba(){
    console.log('Le diste submit al formulario');
    console.log(this.rolesForm.value);
    console.log(this.rolesForm.valid);
  }
}