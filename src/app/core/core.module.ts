import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/components/alert/alert.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        LoadingModule,
        MenuModule,
        ShowIfLoggedModule
    ],
    exports: [
        HeaderComponent,
        RouterModule,
        FooterComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {}