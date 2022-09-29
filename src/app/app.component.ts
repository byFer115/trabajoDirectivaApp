import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje= "";
  nombre:String="";
  apellido:String="";
  cargo:string="";
  registrado=false;
  entradas:entrada[]=[];
  constructor(){
    this.entradas=[
      {titulo:"hola"},
      {titulo:"hola"},
      {titulo:"hola"},
      {titulo:"hola"},
      {titulo:"hola"},
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="usuario registrado con exito";
  }
}

interface entrada{
  titulo:String;
}



