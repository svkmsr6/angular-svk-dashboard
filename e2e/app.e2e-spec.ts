import { AngularSvkDashboardPage } from './app.po';

describe('angular-svk-dashboard App', function() {
  let page: AngularSvkDashboardPage;

  beforeEach(() => {
    page = new AngularSvkDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
