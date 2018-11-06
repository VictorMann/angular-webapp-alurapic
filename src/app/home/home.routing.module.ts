import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: '', 
                component: SigninComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'signup', 
                component: SignUpComponent,
            },
        ]
    }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes)
    ],
    exports: [ 
        RouterModule 
    ]
})
export class HomeRoutingModule {}