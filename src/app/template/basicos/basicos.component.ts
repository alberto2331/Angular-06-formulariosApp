import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!:NgForm;

  valoresInicialesFormulario={
    nombreProducto:'aca va el nombre del producto ;) ',
    precioProducto: 10,
    existenciaProducto:10
  }
  constructor() { }

  ngOnInit(): void {
  }
  nombreValido():boolean{
    return this.formulario?.controls.nombreProducto?.invalid && this.formulario?.controls.nombreProducto?.touched
  }
  precioValido(): boolean{
    return this.formulario?.controls.precioProducto?.touched && this.formulario?.controls.precioProducto?.value<0 
  }
  guardar(){
    this.formulario.resetForm({
      precioProducto: 0,
      existenciaProducto: 0
    });    
  }
}
