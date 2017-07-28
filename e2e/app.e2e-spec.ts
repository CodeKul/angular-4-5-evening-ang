import { MyAppEveningPage } from './app.po';

describe('my-app-evening App', () => {
  let page: MyAppEveningPage;

  beforeEach(() => {
    page = new MyAppEveningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
