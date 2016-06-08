export class WemustflyNamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wemustfly-name-app h1')).getText();
  }
}
