import {StartPage} from '../pages/start.page';

describe(`Go through a crash with animal flow: `, () => {

  const startPage = new StartPage();

  before(() => {
    startPage.navigateTo();
  });

  it(`click Weiter`, () => {
    startPage.getForward().click();
  });
});
