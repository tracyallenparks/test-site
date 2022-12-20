/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Test Site`,
    description:`Basic site concept to learn Gatsby from.`,
    siteUrl: `https://heroic-dolphin-acb0a7.netlify.app/`
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./src/blog`,
      }
    }/*,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }*/
  ]
};