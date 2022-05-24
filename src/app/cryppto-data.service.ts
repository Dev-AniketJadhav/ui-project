import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrypptoDataService {
  constructor(private http: HttpClient) {}

  GetCrypto() {
    // return this.http.get(
    //   'https://api.nomics.com/v1/currencies/ticker?key=f6d84225ab4738000322a6b8f80ae20934dd37bb&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1'
    // );
    return this.http.get('https://api.coinstats.app/public/v1/coins?skip=0');
  }

  // GetCryptoHistory(){
  //   return this.http.get('')
  // }
}

//3bc7c47d-d7b5-4de2-8502-8a8f1017b9c1
