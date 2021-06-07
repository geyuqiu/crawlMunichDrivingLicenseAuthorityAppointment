declare namespace Cypress {
  interface Chainable<Subject> {
    restoreLocalStorage(): Cypress.Chainable<void>;

    saveLocalStorage(): Cypress.Chainable<void>;
  }
}
