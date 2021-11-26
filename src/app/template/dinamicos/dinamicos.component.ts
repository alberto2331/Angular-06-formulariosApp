import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
interface Persona{
  nombre   :string;
  favoritos: Favorito[]
}
interface Favorito{
  id       : number;
  nombre   : string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
  juegoNuevo:string='';

  persona:Persona={
    nombre:'Alberto',
    favoritos:[
      {id:1 , nombre:'Mario Bros'},
      {id:2 , nombre:'Need For Speed'}
    ]
  }
  guardar(){
    
  }
  agregar(){
    const favorito:Favorito ={
      id: this.persona.favoritos.length+1,
      nombre: this.juegoNuevo
    }
    this.persona.favoritos.push({...favorito})
    this.juegoNuevo="";

  }
  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }
}
