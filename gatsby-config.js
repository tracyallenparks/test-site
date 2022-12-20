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
    "gatsby-plugin-mdx", 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./src/pages/blog`,
      }
    }
  ]
};