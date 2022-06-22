import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("Login to the application", () => {
  cy.visit(Cypress.env("url"));
});

When("I type username as {string}", (username) => {
  cy.wait(1000);
  cy.clearInput(userNameField);
  cy.userInput(userNameField, Cypress.env("username"));
});
And("I type password as {string}", (password) => {
  cy.get("#user_password").type(password);
});
Then("click Login", () => {
  cy.get("input[name='submit']").click();
});
And("See the homepage", () => {
  cy.get("a:contains('Zero Bank')").should("be.visible");
});
