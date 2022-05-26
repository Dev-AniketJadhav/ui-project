import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrypptoDataService } from '../cryppto-data.service';
import { IcurruncyData } from './crypto-data';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  Currency: any;

  constructor(
    private cryptoservice: CrypptoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.cryptoservice.GetCrypto().subscribe((data) => {
    //   // console.log(data);
    //   this.Currency = data;
    //   console.log(this.Currency);
    // });
  }
}

// cryptoData() {
//   this.cryptoservice.GetCrypto().subscribe((data) => {
//     console.log(data);
//   });
// }
