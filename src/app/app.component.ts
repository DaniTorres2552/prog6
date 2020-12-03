import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prog6';
  public nombre: string;
  public rol: string
  saludo="";

  captura()
  {
    this.saludo = "Bienvenido  " + this.nombre + " usted es " + this.rol;
  }
}
