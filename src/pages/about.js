import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
  )
}

export const Head = () => {
    return (
        <>
            <title>Home Page</title>
            <meta name="description" content="Basic site concept to learn Gatsby from" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
        </>
    )
}

export default AboutPage