import { Component } from '@angular/core';
import { constanst } from 'src/assets/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'universal-lang';
  languageOption = constanst.languageOptions;
  language = constanst.english;

  changeLanguage(event) {
    switch(event.srcElement.value) {
      case 'en-us':
          this.language = constanst.english;
          break;
      case 'es':
          this.language = constanst.spanish;
          break;
      case 'pt':
          this.language = constanst.portuguese;
          break;
      case 'fr':
          this.language = constanst.french;
          break;
      case 'ma':
          this.language = constanst.mandarin;
          break;
      case 'pl':
          this.language = constanst.polish;
          break;
          break;
      case 'de':
          this.language = constanst.german;
          break;
    }
  }
}
