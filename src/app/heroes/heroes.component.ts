import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

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
  heroes: Hero[] = [];

  // このパラメータはプライベートな heroServiceプロパティとして定義されると同時に、 HeroService を注入すべき場所として認識されます
  constructor(private heroService: HeroService) {}

  // Angularは、コンポーネントの作成直後にngOnInit()を呼び出します
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    // もしsubscribe()をし忘れると、サービスはDELETEリクエストをサーバーに送信しません！ ルールとして、Observableはsubscribeされるまでなにもしません
  }
}
// 常にコンポーネントクラスをexportするので、AppModuleのようにいつでも他の場所にimportできます
