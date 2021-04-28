import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

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
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes = HEROES;

  constructor() { }

  // Angularは、コンポーネントの作成直後にngOnInit()を呼び出します
  ngOnInit(): void {
  }

}
// 常にコンポーネントクラスをexportするので、AppModuleのようにいつでも他の場所にimportできます
