import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

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
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() { }

  // Angularは、コンポーネントの作成直後にngOnInit()を呼び出します
  ngOnInit(): void {
  }

}
// 常にコンポーネントクラスをexportするので、AppModuleのようにいつでも他の場所にimportできます
