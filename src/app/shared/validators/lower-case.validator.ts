import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator (control: AbstractControl) {

    return ( control.value.trim() && !/^[a-z][\w\-]+$/.test(control.value) )
    ? {lowerCase: true}
    : null;
}