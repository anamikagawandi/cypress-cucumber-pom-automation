
function getHeaders(token) {
    return {
        authorization: "Bearer "+token,
        accept: "application/json, text/plain, */*"
    }
}

Cypress.Commands.add("sendGetRequest", (endPoint, token="") => {
    return cy.request({
        method: 'GET',
        url: endPoint,
        headers:getHeaders(token)
    })
});

Cypress.Commands.add("sendPostRequest", (endPoint, data, token="") => {
    return cy.request({
        method: 'POST',
        url: endPoint,
        body: data,
        headers:getHeaders(token)
    })
});

Cypress.Commands.add("sendPutRequest", (endPoint, data, token="") => {
    return cy.request({
        method: 'PUT',
        url: endPoint,
        body: data,
        headers:getHeaders(token)
    })
});

Cypress.Commands.add("sendPatchRequest", (endPoint, data, token="") => {
    return cy.request({
        method: 'PATCH',
        url: endPoint,
        body: data,
        headers:getHeaders(token)
    })
});

Cypress.Commands.add("sendDeleteRequest", (endPoint, token="") => {
    return cy.request({
        method: 'DELETE',
        url: endPoint,
        headers:getHeaders(token)
    })
});

Cypress.Commands.add("login", (endPoint, username, password) => {
    return cy.request({
        method: 'POST',
        url: endPoint,
        body: {
            "username":username,
            "password":password
        }
    })
});