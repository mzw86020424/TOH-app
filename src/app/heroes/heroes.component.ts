import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

// @Componentは、コンポーネントのAngularメタデータを指定するデコレーター関数です
// 一部のメタデータは、コンポーネントクラスに追加した@Componentデコレーター内にあります。
// その他の重要なメタデータは@NgModuleデコレーター内にあります
// もっとも重要な@NgModuleデコレーターは、トップレベルの AppModule クラスに注釈を付けます
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // アプリを起動した際、 selectedHero は 意図的に undefined です
  selectedHero?: Hero;

  heroes: Hero[] = [];

  // このパラメータはプライベートな heroServiceプロパティとして定義されると同時に、 HeroService を注入すべき場所として認識されます
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  // Angularは、コンポーネントの作成直後にngOnInit()を呼び出します
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
// 常にコンポーネントクラスをexportするので、AppModuleのようにいつでも他の場所にimportできます
