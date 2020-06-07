/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trent Bitterman's Site`,
        short_name: `Trent's Site`,
        start_url: `/`,
        background_color: `#D9E1E2`,
        theme_color: `#0076A5`,
        display: `browser`,
        icon: `static/favicon.svg`,
      },
    },
  ],
}
