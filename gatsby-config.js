const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Friends of Stars Experience Alberta`,
    description: `Friends of Stars Experience Alberta. You could WIN an exciting Experience Alberta Package! Albertans Supporting Stars!`,
    author: `@switchback4ever`,
    metaImg: `src/images/default-meta-min.png`,
    siteLogo: `src/images/freinds-of-stars-experience-alberta.jpg`,
    siteUrl: `https://friendsofstarsexperiencealberta.com/`,
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d5001b`,
        theme_color: `#d5001b`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: process.env.WORDPRESS_URL,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://friendsofstarsexperiencealberta.com/",
        sitemap: "https://friendsofstarsexperiencealberta.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://friendsofstarsexperiencealberta.com/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-184504409-1",
        head: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     mergeSecurityHeaders: false,
    //     headers: {
    //       "/*": [
    //         "cache-control: public,max-age=60",
    //         "X-Frame-Options: sameorigin",
    //         "X-XSS-Protection: 1; mode=block",
    //         "X-Content-Type-Options: nosniff",
    //         "Feature-Policy: camera 'none'; geolocation 'none'; microphone 'none'",
    //       ],
    //       "/**/*.html": ["cache-control: public, max-age=300"],
    //       "/static/*": ["cache-control: public, max-age=31536000, immutable"],
    //       "/*.js": ["cache-control: public, max-age=31536000, immutable"],
    //       "/*.css": ["cache-control: public, max-age=31536000, immutable"],
    //       "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
    //     },
    //   },
    // },
  ],
}
