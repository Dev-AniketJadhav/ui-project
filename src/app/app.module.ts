import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular//common/http';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, CryptoDataComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
