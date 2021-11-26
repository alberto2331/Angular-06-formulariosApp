import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map ,delay } from 'rxjs/operators';
//cualquier otra cosa que yo le indique

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorsService implements AsyncValidator{

  constructor( private http:HttpClient ) { }
  validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    //El valor del campo viene en "control" mas precisamente en "value" por eso creo una constante:
    const email = control.value;
    console.log(email)
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)        
        .pipe(
            delay(3000), //son 3 segundos 
            map( resp =>{
              return(resp.length===0)
                ?null
                :{emailTomado: true}
            })
          ) 
  }
}
