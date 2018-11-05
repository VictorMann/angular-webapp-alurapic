import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent 
{
    user$: Observable<User>;
    user: User;

    constructor (
        private userService: UserService,
        private router: Router) 
    {
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

    logout ()
    {
        this.userService.logout();
        this.router.navigate(['']);
    }
}