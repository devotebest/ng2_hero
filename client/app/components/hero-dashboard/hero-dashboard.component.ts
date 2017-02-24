import { Component, OnInit } from '@angular/core';

import { Hero } from '../../dto/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-dashboard',
  templateUrl: 'hero-dashboard.component.html',
  styleUrls: ['hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getFirstFourHeroes();
  }

  getFirstFourHeroes(): void {
    this.heroService.getHeroes()
          .then(heroes => {
          this.heroes = heroes.slice(0, 4)
        });
  }
}
