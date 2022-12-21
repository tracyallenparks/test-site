import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(children)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image &&
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
      }

      {data.mdx.frontmatter.hero_image_credit_text && data.mdx.frontmatter.hero_image_credit_link &&
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
      }
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost