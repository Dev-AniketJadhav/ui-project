import { Component } from '@angular/core';
import { CrypptoDataService } from './cryppto-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui-project';
  cryptoData() {}
}
