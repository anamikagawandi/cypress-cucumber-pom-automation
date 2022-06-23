/// <reference types="cypress" />

import AddPatientPageElement from "../page-elements/AddPatientPageElement";

export default class AddPatientPageAction {
  constructor() {
    this.addPatientPageElements = new AddPatientPageElement();
  }

  validateTitle() {
    this.addPatientPageElements
      .titleMenu()
      .should("be.visible")
      .and("contain", " Patients directory ");
  }

  clickSearchIcon() {
    cy.wait(1000);
    this.addPatientPageElements.searchIcon().click();
  }

  clickAddPatient() {
    cy.wait(1000);
    this.addPatientPageElements.searchIcon().click();
  }
}
