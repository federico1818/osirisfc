import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsComponent } from './pages/tournaments/tournaments.component'

@NgModule({
    declarations: [
    TournamentsComponent
  ],
    imports: [
        CommonModule,
        TournamentsRoutingModule
    ]
})
export class TournamentsModule { }
