import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    terminos:[false,Validators.requiredTrue]
  })
  persona={
    genero:'F',
    notificaciones: true
  }
  constructor( private fb: FormBuilder) { }
  
  guardar(){
    const formValue = this.miFormulario.value; //esto me trae los valores del form que se
    //componen de 3 atributos: 1) genero, 2) notificaciones y 3) terminos. Tengo que quitar "terminos"
    //ya que no forman parte de la persona.
    delete formValue.terminos;
    this.persona = formValue;
    console.log(this.persona)

  }
  ngOnInit(){
    this.miFormulario.reset( {
      ...this.persona,
      terminos: false
    });
    this.miFormulario.get('terminos')?.valueChanges.subscribe(variacionTerminos=>{
      console.log(variacionTerminos);
    })
    this.miFormulario.valueChanges.subscribe(({terminos,...restoDeInfo})=>{ //con esa desestructuracion
      //saque los terminos y deje "genero" y "notificaciones"
      this.persona=restoDeInfo;
    })
  }
}
