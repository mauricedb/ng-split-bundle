import { NgSplitBundlePage } from './app.po';

describe('ng-split-bundle App', function() {
  let page: NgSplitBundlePage;

  beforeEach(() => {
    page = new NgSplitBundlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
