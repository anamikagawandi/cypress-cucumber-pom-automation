import { Given, And, Then, When, Before } from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import DashboardPageAction from "../../../page-object/page-actions/DashboardPageAction";
import { getEnvVar } from "../../../../../utils/fetch-test-data";
const loginPage = new LoginPageAction();

Before(() => {
  loginPage.navigateToURL();
});

Given("I am on login page", () => {
  cy.validateTitle(loginPage, "Capstone");
});

When ("I type valid username and password", () => {
  loginPage.inputUsername(getEnvVar("username"));
  loginPage.inputPassword(getEnvVar("password"));
});

When (/^I type invalid username as (.+) and password as (.+)$/, (username, password) => {
    loginPage.inputUsername(username.trim());
    loginPage.inputPassword(password.trim());
});


And("Click login", () => {
  loginPage.clickLoginBtn();
});

Then("I should see invalid cred error message {string}", (errorMsg) => {
  loginPage.getErrorMessageLabel()
  .should("be.visible")
  .and("contain", errorMsg);
});

And("Select email for OTP", () => {
  loginPage.getMessage()
    .should("be.visible")
    .and("contain", "Where would you like to receive OTP ?");
  loginPage.selectEmailRadioBtn();
});

And("Click send OTP", () => {
  loginPage.clickSendOTPBtn();
  cy.wait(1000 * 10);
  loginPage.getMessage()
    .should("be.visible")
    .and("contain", "Enter OTP Received");
});

And("Enter OTP", () => {
  cy.wait(1000 * 30); // wait for 30 sec to wait for entering OTP
});

And("Click submit", () => {
  loginPage.clickSubmitBtn();
});

Then("I should be logged in", () => {
  cy.wait(1000 * 5);
  const dashboardPage = new DashboardPageAction();
  dashboardPage.validateTitle();
});

And("Enter invalid OTP as {string}", (otp) => {
  loginPage.inputOTP(parseInt(otp));
});

Then("I should see invalid OTP error message {string}", (errorMsg) => {
  loginPage.getErrorMessageLabel()
  .should("be.visible")
  .and("contain", errorMsg);
});

When("I type invalid email format: {string}", (email) => {
	loginPage.inputUsername(email);
  loginPage.blurUsername();
});

Then("I should see invalid email error message {string}", (errorMsg) => {
	loginPage.validateInvalidEmailMsgLabel(errorMsg);
});

When("I type blank email", () => {
	loginPage.inputUsername(" ");
  loginPage.blurUsername();
});

Then("I should see required field email error message {string}", (errorMsg) => {
	loginPage.validateReqEmailMsgLabel(errorMsg);
});


When("I type blank password", () => {
  loginPage.inputBlankPassword();
});

Then("I should see required field password error message {string}", (errorMsg) => {
	loginPage.validateReqPasswordMsgLabel(errorMsg);
});

And("Enter incorrect OTP format as {string}", (otp) => {
  loginPage.inputOTP(parseInt(otp));
  loginPage.blurOTP();
});

Then("I should see incorrect OTP error message {string}", (errorMsg) => {
  loginPage.validateIncorrectOTPFormatLabel(errorMsg);
});