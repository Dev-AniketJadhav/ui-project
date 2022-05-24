import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';

const routes: Routes = [
  { path: 'cryptocurrency', component: CryptoDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
