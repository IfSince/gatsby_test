/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: `Leon Test Site`,
    description: `This is a description used inside meta tags`,
    author: `Leon Laade`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    image: 'src/images/gatsby-icon.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${ __dirname }/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${ __dirname }/locales`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      placeholder: 'gray',
      quality: 50,
      breakpoints: [750, 1080, 1366, 1920],
      backgroundColor: `transparent`,
      blurredOptions: {},
      jpgOptions: {},
      pngOptions: {},
      webpOptions: {},
      avifOptions: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My first website`,
        short_name: `First site`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'de'],
        defaultLanguage: 'de',
        siteUrl: 'http://localhost:8000/',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    'gatsby-plugin-dark-mode',
  ],
}
