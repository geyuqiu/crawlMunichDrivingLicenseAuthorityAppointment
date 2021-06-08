import {Navigator} from '../../util/Navigator';

export class StartPage extends Navigator {

  navigateTo(): void {
    super.navigateTo('/');
  }

  getForward() {
    return cy.get('.WEB_APPOINT_FORWARDBUTTON');
  }

  getConvert() {
    return cy.contains('Umschreibung eines ausländischen Führerscheins ');
  }

  getWeekdayBookable() {
    return cy.get('.nat_calendar .nat_calendar_weekday_bookable')
      .should('not.exist');
  }

  selectDropDown1() {
    return cy.get('select[name="CASETYPES[FS Umschreibung Ausländischer FS]"]')
      .select('1')
      .should('have.value', '1');
  }
}
