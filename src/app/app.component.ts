import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'app/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translate: TranslateService,
    private language: LanguageService
  ) {
    this.translate.setDefaultLang(this.language.getDefaultLanguage());
    this.translate.use(this.language.getLanguage());
  }
}
