import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{
  constructor(private fb : FormBuilder) { }
  miFormulario:FormGroup = this.fb.group({
    nombre:[,[Validators.required , Validators.minLength(3)]],
    favoritos:this.fb.array( [
      ['Metal Gear',Validators.required],  
      ['Mario Bros',Validators.required],
    ] , Validators.required)
  })
  
  nuevoFavorito:FormControl = this.fb.control('',Validators.required);

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) { return }
    
    this.ArregloDeFavoritos.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  eliminarFavorito( i: number){    
    this.ArregloDeFavoritos.removeAt(i);
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  get ArregloDeFavoritos(){
   return this.miFormulario.get('favoritos') as FormArray //con esto le estamos diciendo a TS que lo trate como un FormArray 
   //eso debería eliminar el error que vemos en "controls" en el lado del html.
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
    this.miFormulario.reset();
  }
}
