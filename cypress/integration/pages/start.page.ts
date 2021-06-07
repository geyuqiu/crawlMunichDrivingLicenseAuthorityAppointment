import {Navigator} from '../../util/Navigator';

export class StartPage extends Navigator {

  navigateTo(): void {
    super.navigateTo('/');
  }

  getForward() {
    return cy.get('#cy-start-forward');
  }
}
