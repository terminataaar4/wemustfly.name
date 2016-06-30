export class SimpleSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('simple-site-app h1')).getText();
  }
}
