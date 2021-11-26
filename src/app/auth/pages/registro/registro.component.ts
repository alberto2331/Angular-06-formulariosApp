import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, todoEsPosible } from '../../../shared/validators/validaciones';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorsService } from '../../../shared/validators/email-validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username:['',[ Validators.required, this.vs.todoEsPosible ] ],
    password:['',[ Validators.required, Validators.minLength(6)]],
    password2:['',[ Validators.required]]
  },{
    validators: [this.vs.camposIguales('password','password2') ]
  })

  get emailErrorsMsg():string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El mail es obligatorio';
    }else if(errors?.pattern){
      return 'El mail no tiene el formato correcto';
    }else if(errors?.emailTomado){
      return 'El mail ya se encuentra registrado';
    }
    return '';
  }

  constructor( private fb            : FormBuilder,
               private vs            : ValidatorsService,
               private emailValidator: EmailValidatorsService) { }
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alberto Saiz',
      email:'test1@test.com',
      username: 'Albert_93',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid  
           && this.miFormulario.get(campo)?.touched;
  }

  /*emailRequired(){
    return this.miFormulario.get('email')?.errors?.required  
           && this.miFormulario.get('email')?.touched;
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors?.pattern
           && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado
           && this.miFormulario.get('email')?.touched;
  }*/

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
