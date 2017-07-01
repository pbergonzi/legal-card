import { LegalCardPage } from './app.po';

describe('legal-card App', () => {
  let page: LegalCardPage;

  beforeEach(() => {
    page = new LegalCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
