/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-root-import'],
  siteMetadata: {
    title: 'Gatsby site',
    description: 'Learning new tools',
    copyright: 'This website is copyright 2021 Gatsby Site'
  }
}
