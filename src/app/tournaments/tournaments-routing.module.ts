import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TournamentsComponent } from 'src/app/tournaments/pages/tournaments/tournaments.component'

const routes: Routes = [
    {
        path: 'tournaments',
        component: TournamentsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TournamentsRoutingModule { }
