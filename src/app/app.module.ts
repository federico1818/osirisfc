import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideAuth,getAuth } from '@angular/fire/auth'
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'

import { IconsModule } from 'src/app/icons/icons.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { PlayersModule } from 'src/app/players/players.module'
import { TournamentsModule } from 'src/app/tournaments/tournaments.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        IconsModule,
        SharedModule,
        PlayersModule,
        TournamentsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
