import {AbstractControl} from '@angular/forms';

export class UserNameValidator{

    static cannotHaveSpace(input:AbstractControl){

        
        if(input.value.includes(" ")){
            return{
                cannotHaveSpace:true
            }
        }
    }
}