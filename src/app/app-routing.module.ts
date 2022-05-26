import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'cryptocurrency', component: CryptoDataComponent },

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
