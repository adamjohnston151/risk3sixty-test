import { Risk3sixtyPage } from './app.po';

describe('risk3sixty App', function() {
  let page: Risk3sixtyPage;

  beforeEach(() => {
    page = new Risk3sixtyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
