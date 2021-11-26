import { FormControl } from '@angular/forms';

export const nombreApellidoPattern:string='([a-zA-Z]+ [a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const todoEsPosible = (control:FormControl) =>{
    const valor:string = control.value?.trim().toLowerCase();
    //el signo de pregunta es para el caso de que value todavía no exista
    //El trim limpia espacios en blanco
     if(valor === 'albert'){
       return {
         noOk: true
       }
       //cuando se retorna un objeto se considera un error
     }else{
       return null;
       //cuando retornamos null en una validacion significa que no hay ningun error
     }
   }