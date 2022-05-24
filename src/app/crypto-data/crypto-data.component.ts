import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrypptoDataService } from '../cryppto-data.service';
@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  constructor(
    private cryptoservice: CrypptoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cryptoservice.GetCrypto().subscribe((data) => {
      console.log(data);
    });
  }
}
// cryptoData() {
//   this.cryptoservice.GetCrypto().subscribe((data) => {
//     console.log(data);
//   });
// }
