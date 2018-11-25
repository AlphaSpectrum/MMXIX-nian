module.exports = {
  siteMetadata: {
    title: 'arc | Homepage',
    keywords: `
        javascript, 
        gatsbyjs, 
        web developer, 
        engineer, 
        software, 
        software engineer, 
        react, 
        machine learning, 
        ai, 
        artificial intelligence, 
        math, 
        mathematics, 
        webpack, 
        html, 
        css`,
    description: 'Software enginer and web developer Alan Campos',
    siteURL: 'https://www.alan-campos.com',
    twitterURL: 'https://twitter.com/ln_cmps',
    linkedInURL: 'https://linkedin.com/in/alancampos/',
    gitHubURL: 'https://github.com/alphaspectrum'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'ARC',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo.png',
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
  ],
}
