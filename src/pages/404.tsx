import React from "react"
import { graphql } from "gatsby"

// @ts-ignore
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "../gatsby-theme-blog/components/seo"
import { SiteTitleQuery } from "../../types/graphql-types"

const NotFoundPage: React.FC<{ data: SiteTitleQuery; location: Location }> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`
