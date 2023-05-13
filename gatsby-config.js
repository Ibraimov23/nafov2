
module.exports = {
  siteMetadata: {
    title: `NAFO`,
    description: `The $NAFO token helps Ukrainian people and Ukrainian forces in their fight against the invaders. Buy $NAFO to become a fella and contribute to Ukraine's victory and well-being. Stop wasting your money on useless memecoins and make a real impact instead!`,
    author: `@jonh`,
    siteUrl: `https://nafov2-ibraimov-nursultan.vercel.app/`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        }
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/header/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/   
        }
      }
    },
  ],
}
