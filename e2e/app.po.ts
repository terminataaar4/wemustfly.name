import { browser, element, by } from 'protractor/globals';

export class WemustflyNamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('simple-site-app div')).getText();
  }
}
