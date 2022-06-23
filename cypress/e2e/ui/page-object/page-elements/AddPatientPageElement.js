/// <reference types="cypress" />
require("cypress-xpath");

const locators = require("../../../../fixtures/locators.json");

export default class AddPatientPageElement {
  titleMenu() {
    return cy.get(locators.addPatient.title);
  }

  titleDD() {
    return cy.get(locators.addPatient.titleDD);
  }

  salutationOption(salutation) {
    return cy.contains(salutation);
  }

  fnameInput() {
    return cy.get(locators.addPatient.fnameInput);
  }

  lnameInput() {
    return cy.get(locators.addPatient.lnameInput);
  }

  occupationInput() {
    return cy.get(locators.addPatient.occupationInput);
  }

  genderDD() {
    return cy.contains(locators.addPatient.genderDD);
  }

  genderOption() {
    return cy.contains(locators.addPatient.genderOption);
  }

  dobInput() {
    return cy.get(locators.addPatient.dobInput);
  }

  contactDetailsTab() {
    return cy.contains(locators.addPatient.contactDetailsTab);
  }

  physicalAddInput() {
    return cy.get(locators.addPatient.physicalAddInput);
  }

  mobInput() {
    return cy.get(locators.addPatient.mobInput);
  }

  emailInput() {
    return cy.get(locators.addPatient.emailInput);
  }

  accountHolderTab() {
    return cy.contains(locators.addPatient.accountHolderTab);
  }

  submitBtn() {
    return cy.xpath(locators.addPatient.submitBtn);
  }

}
