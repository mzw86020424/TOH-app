import { NgModule } from "@angular/core";
// アプリにルーティング機能を持たせることができる RouterModule と Routes をインポート
import { RouterModule, Routes } from "@angular/router";

// ルートを設定することでルーターに向かう場所を教えます
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  // @NgModuleメタデータはルーターを初期化し
  // ブラウザのロケーションの変更を待機します。
  // forRootメソッドはルーティングに必要なサービス・プロバイダーとディレクティブを提供し、
  // ブラウザの現在のURLを元に最初の遷移を行います。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
