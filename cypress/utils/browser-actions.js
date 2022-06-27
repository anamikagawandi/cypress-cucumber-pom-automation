// input methods

Cypress.Commands.add("userInput", (locator, text) => {
    cy.get(locator).type(text);
});

Cypress.Commands.add("clearInput", (locator) => {
    cy.get(locator).clear();
});

Cypress.Commands.add("clearAndInput", (element, text) => {
    element.clear();
    element.type(text);
});

Cypress.Commands.add("focusAndBlur", (element) => {
    element.focus().blur();
});

Cypress.Commands.add("checkInput", (locator) => {
    cy.get(locator).check();
});

Cypress.Commands.add("uncheckInput", (locator) => {
    cy.get(locator).uncheck();
});

Cypress.Commands.add("selectDropdown", (locator, selector) => {
    cy.get(locator).select(selector);
});

// click methods

Cypress.Commands.add("clickButton", (locator) => {
    cy.get(locator).click();
});

Cypress.Commands.add("doubleClickButton", (locator) => {
    cy.get(locator).dblclick();
});

Cypress.Commands.add("rightClickButton", (locator) => {
    cy.get(locator).rightclick();
});

Cypress.Commands.add("submitForm", (locator) => {
    cy.get(locator).submit();
});

Cypress.Commands.add("longPress", (locator) => {
    cy.get(locator).trigger('mousedown')
    cy.wait(1000)
    cy.get(locator).trigger('mouseup')
});

// get text

Cypress.Commands.add("getText", (locator) => {
    cy.get(locator).then(($ele) => {
        return new Cypress.Promise((resolve, reject) => {
            const txt = $ele.text()
            cy.log("text : " + txt)
            resolve(txt)
        })
    })
});

// Javascript Alert

Cypress.Commands.add("confirmAlert", () => {
    cy.on('window:confirm', () => { })
});

// iframe methods

Cypress.Commands.add("switchToIframeAndClick", (iframeLocator, eleLocator) => {
    cy.frameLoaded(iframeLocator);
    cy.iframe(iframeLocator).find(eleLocator).type("foo")
});

Cypress.Commands.add("switchToIframeAndSendText", (iframeLocator, eleLocator, text) => {
    cy.frameLoaded(iframeLocator);
    cy.iframe(iframeLocator).find(eleLocator).type(text)
});

// Table iterator

// Cypress.Commands.add("getTableValue", (tableLocator, row, col) => {
//     cy.get(tableLocator).find(tr).each(($e1, index, $list) = {
        
//     })    
// });

// Validation
Cypress.Commands.add("validateTitle", (pageObj, title) => {
    pageObj.getTitle()
    .should('eq', title);
});

// Common steps
Cypress.Commands.add("loginToApp", (loginPageObj, username, password) => {
    loginPageObj.navigateToURL();
    loginPageObj.getOTPForLogin(username, password);
    loginPageObj.getLoggedIn();
});