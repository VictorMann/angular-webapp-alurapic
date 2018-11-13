import { ErrorHandler, Injector } from '@angular/core';
import * as StackTrack from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';

export class GlobalErrorHandler implements ErrorHandler 
{
    constructor(private injector: Injector) {}

    handleError(error: any): void 
    {
        console.log('passei pelo handler');    
        
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const url = location instanceof PathLocationStrategy
        ? location.path()
        : '';

        const message = error.message
        ? error.message
        : error.toString();

        StackTrack
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n');

                console.log(message);
                console.log(stackAsString);
                console.log('o que sera enviado para o servidor');
                console.log({message, url, userName: userService.getUserName(), stack: stackAsString});
            })
    }
}