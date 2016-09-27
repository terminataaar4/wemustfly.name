import { WemustflyNamePage } from './app.po';

describe('wemustfly-name App', function() {
  let page: WemustflyNamePage;

  beforeEach(() => {
    page = new WemustflyNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toMatch('Loading...');
  });
});
