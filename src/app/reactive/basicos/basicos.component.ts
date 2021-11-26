import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,  } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.miFormulario.reset({
      nombre:'Polo GTI',
      precio:15000,
    })
  }
  miFormulario:FormGroup = this.fb.group({
    nombre:['', [ Validators.required, Validators.minLength(3)]   ],
    precio:[, [Validators.required,Validators.min(0)]],
    existencias:[, [Validators.required,Validators.min(0)]]
  })
  campoValido(campo:string){
    return (this.miFormulario.controls[campo].errors && 
            this.miFormulario.controls[campo].touched)
  } 
  guardar(){
    if(this.miFormulario.invalid){ //si el form no cumple con alguna caracteristica entra en el if
      this.miFormulario.markAllAsTouched();//marca todos los campos como tocados,
      //eso genera que si el usuario dejo algun campo SIN TOCAR Y POR ENDE EL ERROR NO APARECE
      //ESTA FUNCION LO VA A TOCAR Y HARÁ QUE EL CARTEL DE ERROR APAREZCA
      return  
    }
    console.log(this.miFormulario);
    this.miFormulario.reset();
  }
}
