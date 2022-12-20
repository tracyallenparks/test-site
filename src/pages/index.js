import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="This is the most accurate natural color images of Pluto taken by NASA's New Horizons spacecraft in 2015. These natural-color images result from refined calibration of data gathered by New Horizons' color Multispectral Visible Imaging Camera (MVIC). The striking features on Pluto are clearly visible, including the bright expanse of Pluto's icy, nitrogen-and-methane rich 'heart,' Sputnik Planitia."
                src="../images/BIG_P_COLOR_2_TRUE_COLOR1_1980.jpg"
            />
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage