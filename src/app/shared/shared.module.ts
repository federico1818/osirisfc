import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { IconsModule } from '../icons/icons.module'
import { MenuComponent } from './components/menu/menu.component'


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        RouterModule.forRoot([]),
        CommonModule,
        IconsModule
    ],
    exports: [
        MenuComponent
    ]
})

export class SharedModule { }
