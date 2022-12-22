import { Component } from '@angular/core';
import { SuperHero } from './Models/Super-Hero';
import { SuperHeroService } from './Services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero';
  heroes : SuperHero[] = [];
  constructor(private superHeroService: SuperHeroService)
  {}
   
  ngOnInit(): void
  {
    this.superHeroService.getSuperHeroes()
    .subscribe({next:result=>{this.heroes=result}})
  } 
 // (result: SuperHero[])=>(this.heroes = result));

}
