import { CoursAngular2Page } from './app.po';

describe('cours-angular2 App', function() {
  let page: CoursAngular2Page;

  beforeEach(() => {
    page = new CoursAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
