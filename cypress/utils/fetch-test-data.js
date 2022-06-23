
module.exports = {
    getEnvVar: function (property) {
        return Cypress.env(property);
    }
};

