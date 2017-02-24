import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroDashboardComponent } from './components/hero-dashboard/hero-dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroService } from './services/hero.service';
import './services/rxjs-extensions';

@NgModule({
  imports: [
             BrowserModule,
             FormsModule,
             HttpModule,
             AppRoutingModule
           ],
  declarations: [
                  AppComponent,
                  HeroesListComponent,
                  HeroDetailComponent,
                  HeroDashboardComponent,
                  HeroSearchComponent
                ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
