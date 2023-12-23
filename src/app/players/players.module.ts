import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './pages/players/players.component'

@NgModule({
    declarations: [
        PlayersComponent
    ],
    imports: [
        CommonModule, 
        PlayersRoutingModule
    ]
})

export class PlayersModule {}
