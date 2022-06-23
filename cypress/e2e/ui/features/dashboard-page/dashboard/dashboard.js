import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import DashboardPageAction from "../../../page-object/page-actions/DashboardPageAction";
import AddPatientPageAction from "../../../page-object/page-actions/AddPatientPageAction";
import { getEnvVar } from "../../../../../utils/fetch-test-data";


const loginPage = new LoginPageAction();
const dashboardPage = new DashboardPageAction();

Given("I have logged in", () => {
  loginPage.navigateToURL();
  loginPage.getOTPForLogin(getEnvVar("username"), getEnvVar("password"));
  loginPage.getLoggedIn();
});

Then("I should be able to view dashboard", () => {
  // cy.wait(1000 * 5);
  dashboardPage.validateTitle();
});

When("I click on search icon", () => {
  dashboardPage.clickSearchIcon();
});

And("I click on add patient button", () => {
  dashboardPage.clickAddPatient();
});

Then("I will be routed to Add Patient page", () => {
  const addPatientPage = new AddPatientPageAction();
  addPatientPage.validateTitle();
});
