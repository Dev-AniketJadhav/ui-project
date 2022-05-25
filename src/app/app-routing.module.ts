import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'cryptocurrency', component: CryptoDataComponent },
  { path: '', component: CryptoDataComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
