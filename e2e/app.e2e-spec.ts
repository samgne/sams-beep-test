import { SamsBeepTestPage } from './app.po';

describe('sams-beep-test App', function() {
  let page: SamsBeepTestPage;

  beforeEach(() => {
    page = new SamsBeepTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
