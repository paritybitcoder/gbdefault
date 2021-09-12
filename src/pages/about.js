import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <Seo title="About Page" />
            <h1>About This Site</h1>
            <p>This is my sandbox site for playing with GatsbyJS</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default AboutPage