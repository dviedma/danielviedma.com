require('dotenv').config();

const path = require("path");
const TOKEN = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN;
const HOST = process.env.GATSBY_CONTENTFUL_HOST;

module.exports = {
  siteMetadata: {
    title: `Firstborn Boilerplate Project`,
    description: `Kick off your next, great Firstborn project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Firstborn Tech`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `l3vsvnjq3ag0`,
        accessToken: TOKEN,
        host: HOST
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
