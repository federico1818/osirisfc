import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconsModule } from '../icons/icons.module'
import { MenuComponent } from './components/menu/menu.component'


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        IconsModule
    ],
    exports: [
        MenuComponent
    ]
})

export class SharedModule { }
