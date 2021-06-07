import {StartPage} from '../pages/start.page';

describe(`Go through a crash with animal flow: `, () => {

  const startPage = new StartPage();

  before(() => {
    startPage.navigateTo();
  });

  it(`click Weiter after selecting Umschreibung eines ausländischen Führerscheins etc. `, () => {
    startPage.getConvert().click();
    startPage.selectDropDown1();
    startPage.getForward().click();
    startPage.getWeekdayBookable();
  });
});
