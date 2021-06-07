/// <reference types="Cypress" />

const ENV = Cypress.env(Cypress.env('stage'));
Cypress.config('baseUrl', ENV.baseUrl);

export class Navigator {

  public navigateTo(path: string): void {
    cy.visit(path);
  }
}
