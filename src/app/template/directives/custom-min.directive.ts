import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]', //con este nombre angular va a buscar a mi directiva personalizada. Va entre '[]'
    //Tiene que estar asociado a un NgModel
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{
    @Input() minimo!: number; //El signo de admiracion es para indicar que siempre vamos a tener un numero
    
    constructor(){}
    
    validate( control : FormControl) {
        const inputValue = control.value;

        return ( inputValue < this.minimo )
                ? {'customMin': true }
                : null ;
    }
    
}