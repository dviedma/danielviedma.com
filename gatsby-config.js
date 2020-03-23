require("dotenv").config()

const path = require("path")
const TOKEN = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
const HOST = process.env.GATSBY_CONTENTFUL_HOST

module.exports = {
  siteMetadata: {
    title: `Hello, I am Daniel Viedma`,
    description: `Barcelona native Technical Director living in NYC 🗽.`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
