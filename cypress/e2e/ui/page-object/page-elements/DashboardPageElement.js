const locators = require("../../../../fixtures/locators.json");

export default class DashboardPageElement {
  titleMenu() {
    return cy.get(locators.dashboard.title);
  }

  searchIcon() {
    return cy.get(locators.dashboard.searchIcon);
  }

  addPatientBtn() {
    return cy.contains(locators.dashboard.addPatientBtn);
  }

}
