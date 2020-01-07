import {AbstractControl} from '@angular/forms';

export class UserValidator{

    static cannotHaveSpace(input:AbstractControl){

        
        if(input.value.includes(" ")){
            return{
                cannotHaveSpace:true
            }
        }
    }
}
