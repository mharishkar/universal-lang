import { Component, OnInit } from '@angular/core';
import { constanst } from 'src/assets/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title: string = 'universal-lang';
  languageOption: object = constanst.languageOptions;
  language: object = constanst.english;

  ngOnInit() {
    this.checkBrowserLanguage();
  }

  checkBrowserLanguage() {
    const userLang = navigator.language;
    this.changeLanguage(userLang);
  }

  getLanguage(event) {
    this.changeLanguage(event.srcElement.value);
  }
  
  changeLanguage(value) {
    switch(value) {
      case 'en-US':
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
