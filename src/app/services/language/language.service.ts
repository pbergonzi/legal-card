import { Injectable } from '@angular/core';

const DEFAULT_LANGUAGE = 'en';

@Injectable()
export class LanguageService {  
  constructor() { 
    console.log(`navigator language: ${navigator.language}`);
  }

  public getLanguage = () => navigator.language.split("-")[0];

  public getDefaultLanguage = () => DEFAULT_LANGUAGE;
}
