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

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // HeroService を生成する際、そのプロパティへシングルトンな MessageService を注入します
  constructor(private messageService: MessageService) { }
}
