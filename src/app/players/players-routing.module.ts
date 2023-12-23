import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayersComponent } from 'src/app/players/pages/players/players.component'

const routes: Routes = [
    {
        path: 'players',
        component: PlayersComponent 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PlayersRoutingModule { }
