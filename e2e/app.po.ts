import { browser, element, by } from 'protractor';

export class NgForestryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dsk-root h1')).getText();
  }
}
