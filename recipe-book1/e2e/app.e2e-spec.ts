import { RecipeBook1Page } from './app.po';

describe('recipe-book1 App', function() {
  let page: RecipeBook1Page;

  beforeEach(() => {
    page = new RecipeBook1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
