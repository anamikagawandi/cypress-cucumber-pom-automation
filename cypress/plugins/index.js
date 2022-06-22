/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const cucumber= require ('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on ('file:preprocessor', cucumber())
}

// const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) => {
//   on('task', {downloadFile})
// }


// const parsePdf = async (sample) => {
//   const pdfPathname = path.join(repoRoot, sample)
//   let dataBuffer = fs.readFileSync(pdfPathname)
//   return pdf(dataBuffer);
// };

// module.exports = (on, config) => {
//   on('task', {
//       getPdfContent (sample) {
//           return String(parsePdf(sample))
//       }
//   });
// };