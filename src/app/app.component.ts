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
  registrado=false;

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="usuario registrado con exito";
  }
}
