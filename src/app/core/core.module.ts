import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent,
        RouterModule
    ]
})
export class CoreModule {}