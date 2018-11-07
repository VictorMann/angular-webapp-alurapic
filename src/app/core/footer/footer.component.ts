import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit 
{
    user$: Observable<User>;
    user: User;
    
    constructor (
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit (): void
    {
        this.user$ = this.userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

    login ()
    {
        this.router.navigate(['']);
    }

    adicionaFoto ()
    {
        this.router.navigate(['p','add']);
    }
}