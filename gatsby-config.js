/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Test Site`,
    siteUrl: `https://heroic-dolphin-acb0a7.netlify.app/`
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};