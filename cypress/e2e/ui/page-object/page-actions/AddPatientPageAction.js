/// <reference types="cypress" />

import AddPatientPageElement from "../page-elements/AddPatientPageElement";

export default class AddPatientPageAction {
  constructor() {
    this.addPatientPageElements = new AddPatientPageElement();
  }

  validateTitle() {
    this.addPatientPageElements.titleMenu()
      .should("be.visible")
      .and("contain", " Patients directory ");
  }

  selectSalutation(salutation) {
    cy.wait(1000);
    this.addPatientPageElements.titleDD().click();
    this.addPatientPageElements.salutationOption(salutation).click();
  }

  inputFirstName(fname) {
    this.addPatientPageElements.fnameInput().type(fname);
  }

  inputLastName(lname) {
    this.addPatientPageElements.lnameInput().type(lname);
  }

  inputOccupation(occupation) {
    this.addPatientPageElements.occupationInput().type(occupation);
  }

  selectGender() {
    this.addPatientPageElements.genderDD().click({force: true});
    this.addPatientPageElements.genderOption().click({force: true});
  }

  inputDOB(dob) {
    this.addPatientPageElements.dobInput().type(dob);
  }

  goToContactDetailsTab() {
    this.addPatientPageElements.contactDetailsTab().click();
  }

  inputPhysicalAdd(address) {
    this.addPatientPageElements.physicalAddInput().type(address);
  }

  inputMobNo(mobNo) {
    this.addPatientPageElements.mobInput.type(mobNo);
  }

  inputEmail(email) {
    this.addPatientPageElements.emailInput.type(email);
  }

  goToAccountHolderTab() {
    this.addPatientPageElements.accountHolderTab().click();
  }

  addPatient() {
    this.addPatientPageElements.submitBtn().click();
  }

}
