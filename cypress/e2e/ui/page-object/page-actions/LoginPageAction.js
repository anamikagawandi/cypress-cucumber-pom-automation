/// <reference types="cypress" />

import LoginPageElement from "../page-elements/LoginPageElement";
import { getEnvVar } from "../../../../utils/fetch-test-data";

export default class LoginPageAction {
  constructor() {
    this.loginPageElements = new LoginPageElement();
  }

  navigateToURL() {
    cy.visit(getEnvVar("url"));
  }

  getTitle() {
    return cy.title();
  }

  inputUsername(username) {
    this.loginPageElements.usernameInput().clear();
    this.loginPageElements.usernameInput().type(username);
  }

  inputOTP(otp) {
    this.loginPageElements.OTPInput().clear();
    this.loginPageElements.OTPInput().type(otp);
  }

  blurUsername() {
    this.loginPageElements.usernameInput().blur();
  }

  inputBlankPassword() {
    this.loginPageElements.passwordInput().focus().blur();
  }

  blurOTP() {
    this.loginPageElements.OTPInput().focus().blur();
  }

  validateInvalidEmailMsgLabel (errorMsg) {
    this.loginPageElements.invalidEmailMsgLabel()
    .should("be.visible")
    .contains(errorMsg);
  }

  validateReqEmailMsgLabel (errorMsg) {
    this.loginPageElements.emailReqLabel()
    .should("be.visible")
    .contains(errorMsg);
  }

  validateReqPasswordMsgLabel (errorMsg) {
    this.loginPageElements.passwordReqLabel()
    .contains(errorMsg);
  }

  validateIncorrectOTPFormatLabel(errorMsg) {
    this.loginPageElements.invalidOTPFormatLabel()
    .should("be.visible")
    .contains(errorMsg);
  }

  inputPassword(password) {
    cy.wait(1000);
    this.loginPageElements.passwordInput().clear();
    this.loginPageElements.passwordInput().type(password, {log:false});
  }

  clickLoginBtn() {
    this.loginPageElements.loginBtn().click();
  }

  getMessage() {
    return this.loginPageElements.messageLabel();
  }

  getErrorMessageLabel() {
    return this.loginPageElements.errorMessageLabel();
  }

  selectEmailRadioBtn() {
    this.loginPageElements.emailRadioBtn().click();
  }

  clickSendOTPBtn() {
    this.loginPageElements.sendOTPBtn().click();
  }

  clickSubmitBtn() {
    this.loginPageElements.submitBtn().click();
  }

  getOTPForLogin(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLoginBtn();
    cy.wait(1000 * 10);
    this.selectEmailRadioBtn();
    this.clickSendOTPBtn();
    cy.wait(1000 * 30);
  }

  getLoggedIn() {
    this.clickSubmitBtn();
  }


}
