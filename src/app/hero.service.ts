import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

// これは、クラスを 依存関係注入システム に参加するものとしてマークします
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // HeroService を生成する際、そのプロパティへシングルトンな MessageService を注入します
  constructor(private messageService: MessageService) { }
}
