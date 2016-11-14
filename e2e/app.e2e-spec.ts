import { GitblogUiPage } from './app.po';

describe('gitblog-ui App', function() {
  let page: GitblogUiPage;

  beforeEach(() => {
    page = new GitblogUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
