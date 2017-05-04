import { NgForestryPage } from './app.po';

describe('ng-forestry App', () => {
  let page: NgForestryPage;

  beforeEach(() => {
    page = new NgForestryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dsk works!');
  });
});
