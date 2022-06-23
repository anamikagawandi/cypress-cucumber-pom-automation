/// <reference types="cypress" />

const locators = require("../../../../fixtures/locators.json");

export default class LoginPageElement {
  usernameInput() {
    return cy.get(locators.login.usernameInput);
  }

  passwordInput() {
    return cy.get(locators.login.passwordInput);
  }

  loginBtn() {
    return cy.get(locators.login.loginBtn);
  }

  messageLabel() {
    return cy.get(locators.login.OTPLabel)
  }

  errorMessageLabel() {
    return cy.get(locators.login.errorMsgLabel)
  }

  emailRadioBtn() {
    return cy.get(locators.login.emailRadioBtn);
  }

  sendOTPBtn() {
    return cy.contains(locators.login.sendOTPBtn);
  }

  submitBtn() {
    return cy.contains(locators.login.submitBtn);
  }
}
