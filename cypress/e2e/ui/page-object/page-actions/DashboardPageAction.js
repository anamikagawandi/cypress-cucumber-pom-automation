/// <reference types="cypress" />

import DashboardPageElement from "../page-elements/DashboardPageElement";

export default class DashboardPageAction {
  constructor() {
    this.dashboardPageElements = new DashboardPageElement();
  }

  validateTitle() {
    this.dashboardPageElements
      .titleMenu()
      .should("be.visible")
      .and("contain", " Dashboard ");
  }

  clickSearchIcon() {
    this.dashboardPageElements.searchIcon().click({force: true});
  }

  clickAddPatient() {
    this.dashboardPageElements.addPatientBtn().click();
  }
}
