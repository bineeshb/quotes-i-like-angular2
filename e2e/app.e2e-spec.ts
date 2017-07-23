import { QuotesILikePage } from './app.po';

describe('quotes-i-like App', () => {
  let page: QuotesILikePage;

  beforeEach(() => {
    page = new QuotesILikePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
