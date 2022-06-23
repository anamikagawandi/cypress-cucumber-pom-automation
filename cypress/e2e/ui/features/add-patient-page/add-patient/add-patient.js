import { Given, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";
import { getEnvVar } from "../../../../../utils/fetch-test-data";
import DashboardPageAction from "../../../page-object/page-actions/DashboardPageAction";
import AddPatientPageAction from "../../../page-object/page-actions/AddPatientPageAction";

const loginPage = new LoginPageAction(); 
const dashboardPage = new DashboardPageAction();
const addPatientPage = new AddPatientPageAction();

Before(() => {
  loginPage.navigateToURL();
  loginPage.getOTPForLogin(getEnvVar("username"), getEnvVar("password"));
  loginPage.getLoggedIn();
  dashboardPage.clickSearchIcon();
  dashboardPage.clickAddPatient();
});

Given("I am on add patient page", () => {
  addPatientPage.validateTitle();
});

When(/^I select salutation (.+)$/, (salutation) => {
	addPatientPage.selectSalutation(salutation);
});

When(/^I input firstname (.+)$/, (fname) => {
	addPatientPage.inputFirstName(fname);
});

When(/^I input lastname (.+)$/, (lname) => {
	addPatientPage.inputLastName(lname);
});

When(/^I input occupation (.+)$/, (occupation) => {
	addPatientPage.inputOccupation(occupation);
});

When("I select gender", () => {
	addPatientPage.selectGender();
});

When(/^I input DOB (.+)$/, (dob) => {
	addPatientPage.inputDOB(dob);
});

When("I move to Contact Details tab", () => {
	addPatientPage.goToContactDetailsTab();
});

When(/^I input physical address (.+)$/, (address) => {
	addPatientPage.inputPhysicalAdd(address);
});

When(/^I input mobile number (.+)$/, (mobile) => {
	addPatientPage.inputMobNo(mobile);
});

When(/^I input personal email id (.+)$/, (email) => {
	addPatientPage.inputEmail(email);
});

When("I move to Accounts Holder tab", () => {
	addPatientPage.goToAccountHolderTab();
});

When("click on submit button", () => {
	addPatientPage.addPatient();
});

Then("Patient details should be added and I should be redirected to Dashboard page", () => {
  dashboardPage.validateTitle();
});
