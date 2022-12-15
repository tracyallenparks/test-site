import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="This is the most accurate natural color images of Pluto taken by NASA's New Horizons spacecraft in 2015. These natural-color images result from refined calibration of data gathered by New Horizons' color Multispectral Visible Imaging Camera (MVIC). The processing creates images that would approximate the colors that the human eye would perceive, bringing them closer to “true color” than the images released near the encounter. This image was taken as New Horizons zipped toward Pluto and its moons on July 14, 2015, from a range of 22,025 miles (35,445) kilometers. This single color MVIC scan includes no data from other New Horizons imagers or instruments added. The striking features on Pluto are clearly visible, including the bright expanse of Pluto's icy, nitrogen-and-methane rich 'heart,' Sputnik Planitia."
                src="../images/BIG_P_COLOR_2_TRUE_COLOR1_1980.jpg"
            />
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

export default IndexPage