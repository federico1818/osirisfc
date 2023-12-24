import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './pages/players/players.component';
import { FeaturedPlayerComponent } from './components/featured-player/featured-player.component'

@NgModule({
    declarations: [
        PlayersComponent,
        FeaturedPlayerComponent
    ],
    imports: [
        CommonModule, 
        PlayersRoutingModule
    ]
})

export class PlayersModule {}
