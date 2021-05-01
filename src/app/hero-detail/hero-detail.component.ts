import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

// HeroDetailComponent テンプレートは、 Hero 型であるコンポーネントの hero プロパティにバインドされます
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // ルートパラメータは常に文字列です。
    // JavaScript (+) 演算子は文字列を数値に変換します
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
