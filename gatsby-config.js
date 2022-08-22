require("dotenv").config()

const path = require("path")
const TOKEN = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
const HOST = process.env.GATSBY_CONTENTFUL_HOST

module.exports = {
  siteMetadata: {
    title: `Daniel Viedma | Technology Leader`,
    description: `Senior Technlogy Leader with expertise in Technical Leadership, Agile Project Management, Commerce, Solution Architecture, User Experience, Prototyping, CI/CD, Release management`,
    author: `Daniel Viedma`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i78lulzyh6fb`,
        accessToken: TOKEN,
        host: HOST,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@static": path.resolve(__dirname, "static"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@components": path.resolve(__dirname, "src/components"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // (Optional) Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics.
        anonymize: true,
        // (Optional)  Google Analytics will not be loaded at all for visitors that have “Do Not Track” enabled.
        respectDNT: true,
      },
    },
  ],
}
