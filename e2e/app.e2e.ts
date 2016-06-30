import { SimpleSitePage } from './app.po';

describe('simple-site App', function() {
  let page: SimpleSitePage;

  beforeEach(() => {
    page = new SimpleSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('simple-site works!');
  });
});
